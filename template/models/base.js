models.push('base', {
  extend: [],
  create: function(template, model) {
    model.getTitle = function() {
      if (model.document && model.document.title)
        return model.document.title;
      if (model.document && model.document.name)
        return model.document.name + ' - ' + model.site.title;
      if (model.file.header.title)
        return model.file.header.title + ' - ' + model.site.title;
      return model.site.title;
    };

    model.isHome = function() {
      return model.file.url === '/';
    };
  }
});

