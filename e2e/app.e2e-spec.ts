import { NgrxPartyPage } from './app.po';

describe('ngrx-party App', function() {
  let page: NgrxPartyPage;

  beforeEach(() => {
    page = new NgrxPartyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
