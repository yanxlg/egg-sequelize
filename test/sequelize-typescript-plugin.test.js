'use strict';

const mock = require('egg-mock');

describe('test/sequelize-typescript-plugin.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/sequelize-typescript-plugin-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, sequelizeTypescriptPlugin')
      .expect(200);
  });
});
