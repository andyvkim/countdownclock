import { ClockPage } from './app.po';

describe('clock App', () => {
  let page: ClockPage;

  beforeEach(() => {
    page = new ClockPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
