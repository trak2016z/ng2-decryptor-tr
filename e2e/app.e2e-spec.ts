import { DecryptorPage } from './app.po';

describe('decryptor App', function() {
  let page: DecryptorPage;

  beforeEach(() => {
    page = new DecryptorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
