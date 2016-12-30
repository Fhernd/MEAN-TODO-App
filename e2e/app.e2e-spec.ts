import { MeanTodosAppPage } from './app.po';

describe('mean-todos-app App', function() {
  let page: MeanTodosAppPage;

  beforeEach(() => {
    page = new MeanTodosAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('iz works!');
  });
});
