// eslint-disable-next-line no-undef
$('body').on('hidden.bs.modal', '.modal', function () {
  // eslint-disable-next-line no-undef
  $(this).removeData('bs.modal')
})
