import { MatrixPage } from './app.po';

describe('matrix App', () => {
  let page: MatrixPage;

  beforeEach(() => {
    page = new MatrixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
