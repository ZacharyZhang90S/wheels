class Dialog {
  constructor(options) {
    this.options = options;
    this.init();
  }

  get template() {
    let {
      title, content,
    } = this.options;
    return `
      <div class="dialog">
        <div class="dialog-wrapper">
          <header class="dialog-header">${title}</header>
          <main class="dialog-main">${content}</main>
          <footer class="dialog-footer"></footer>
        </div>
      </div>
    `;
  }

  generateButtons() {
    let {buttons} = this.options;
    buttons = buttons.map((buttonOption) => {
      let $b = $('<button></button>');
      $b.text(buttonOption.text);
      $b.on('click', buttonOption.action);
      return $b;
    });
    return buttons;
  }

  init() {
    let $dialog = $(this.template);
    $dialog.find('footer').append(this.generateButtons());
    $dialog.addClass(this.options.className);
    this.$dialog = $dialog;
  }

  open() {
    this.$dialog.appendTo('body');
  }

  close() {
    this.$dialog.detach();
  }
}

////////////////////


x.onclick = function () {
  let dialog = new Dialog({
    title: '标题',
    content: '<b>欢迎</b>',
    className: 'userDialog',
    buttons: [{
      text: '确定',
      action: function () {
        setTimeout(() => {
          dialog.close();
        }, 3000);
      },
    }, {
      text: '取消',
      action: function () {
        dialog.close();
      },
    }],
  });
  dialog.open();
};