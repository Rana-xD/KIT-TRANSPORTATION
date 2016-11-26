import { KITTRANSPORTATIONPage } from './app.po';

describe('kit-transportation App', function() {
  let page: KITTRANSPORTATIONPage;

  beforeEach(() => {
    page = new KITTRANSPORTATIONPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
