import { Angular2-NotesPage } from './app.po';

describe('Angular2-Notes App', function() {
  let page: Angular2-NotesPage;

  beforeEach(() => {
    page = new Angular2-NotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});