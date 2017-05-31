import { USAPLPage } from './app.po';

describe('usapl App', () => {
  let page: USAPLPage;

  beforeEach(() => {
    page = new USAPLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
