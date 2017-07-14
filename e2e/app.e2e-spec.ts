import { HttpWithAngularPage } from './app.po';

describe('http-with-angular App', () => {
  let page: HttpWithAngularPage;

  beforeEach(() => {
    page = new HttpWithAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
