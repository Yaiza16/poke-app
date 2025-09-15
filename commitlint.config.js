module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // Nueva funcionalidad
        'fix', // Arreglar bug
        'docs', // Documentación
        'style', // Formato, no lógica
        'refactor', // Cambio sin añadir features
        'test', // Añadir tests
        'chore', // Herramientas, config
        'perf', // Mejora performance
        'ci', // Continuous integration
        'build', // Build system
        'revert', // Revertir commit
      ],
    ],
    'subject-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 100],
  },
}
