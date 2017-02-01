import { NgBook2RedditPage } from './app.po';

describe('ng-book2-reddit App', function() {
  let page: NgBook2RedditPage;

  beforeEach(() => {
    page = new NgBook2RedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
