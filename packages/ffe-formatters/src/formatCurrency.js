import formatNumber from './formatNumber';
import parseNumber from './internal/parseNumber';
import { NON_BREAKING_SPACE } from './internal/unicode';

export default function formatCurrency(amount, opts = {}) {
    const { prefix, postfix } = {
        prefix: `kr${NON_BREAKING_SPACE}`,
        postfix: ',–',
        ...opts,
    };

    // A ',-' postfix is not allowed for amounts with øre, see:
    // http://www.sprakradet.no/svardatabase/sporsmal-og-svar/kronebelop-rekkjefolgje-komma-og-strek/
    const notAllowedDecimalPostfixes = [',–', ',-'];
    if (parseNumber(amount) % 1 !== 0) {
        const decimalPostfix = notAllowedDecimalPostfixes.includes(postfix)
            ? ''
            : postfix;
        return `${prefix}${formatNumber(amount, {
            decimals: 2,
        })}${decimalPostfix}`;
    }

    return `${prefix}${formatNumber(amount)}${postfix}`;
}
