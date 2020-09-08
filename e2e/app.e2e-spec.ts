import { TodoAppNgPage } from './app.po';

describe('todo-app-ng App', function() {
  let page: TodoAppNgPage;

  beforeEach(() => {
    page = new TodoAppNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
