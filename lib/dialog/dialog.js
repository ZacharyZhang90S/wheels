class Dialog {
  constructor(options) {
    this.options = options;
    this.init();
  }

  init() {
    let {title, content, buttons} = this.options;
    let $buttons = buttons.map((buttonOption) => {
      let $b = $('<button></button>');
      $b.text(buttonOption.text);
      $b.on('click', buttonOption.action);
      return $b;
    });
    let template = `
        <div class="Dialog">
          <header>${title}</header> 
          <main>${content}</main>
          <footer></footer>
        </div>
    `;
    let $dialog = $(template);
    $dialog.append($buttons);
    this.$dialog = $dialog;
  }

  open() {
    this.$dialog.appendTo('body');
  }

  close() {
    this.$dialog.detach();
  }
}

x.onclick = function () {
  let dialog = new Dialog({
    title: '标题',
    content: '<b>欢迎</b>',
    buttons: [{
      text: '确定',
      action: function () {
        setTimeout(() => {
          dialog.close();
        });
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