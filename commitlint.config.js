module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [1, 'always', 'lower-case'],
        'scope-enum': [
            2,
            'always',
            [
                'release',
                'component-overview',
                'eslint-config-ffe',
                'eslint-config-ffe-base',
                'stylelint-config-ffe',
                'ffe-accordion',
                'ffe-accordion-react',
                'ffe-account-selector-react',
                'ffe-buttons',
                'ffe-buttons-react',
                'ffe-cards',
                'ffe-cards-react',
                'ffe-chart-donut-react',
                'ffe-context-message',
                'ffe-context-message-react',
                'ffe-core',
                'ffe-core-react',
                'ffe-collapse-react',
                'ffe-datepicker',
                'ffe-datepicker-react',
                'ffe-decorators-react',
                'ffe-details-list',
                'ffe-details-list-react',
                'ffe-dropdown-react',
                'ffe-file-upload',
                'ffe-file-upload-react',
                'ffe-form',
                'ffe-form-react',
                'ffe-formatters',
                'ffe-grid',
                'ffe-grid-react',
                'ffe-header',
                'ffe-icons',
                'ffe-icons-react',
                'ffe-lists',
                'ffe-lists-react',
                'ffe-message-box',
                'ffe-message-box-react',
                'ffe-sb1-logos',
                'ffe-searchable-dropdown-react',
                'ffe-spinner',
                'ffe-spinner-react',
                'ffe-system-message',
                'ffe-system-message-react',
                'ffe-tables',
                'ffe-tables-react',
                'ffe-tabs',
                'ffe-tabs-react',
                'ffe-webfonts',
            ],
        ],
    },
};
