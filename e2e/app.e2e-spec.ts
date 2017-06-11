import { CodingMasterPage } from './app.po';

describe('coding-master App', () => {
  let page: CodingMasterPage;

  beforeEach(() => {
    page = new CodingMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
