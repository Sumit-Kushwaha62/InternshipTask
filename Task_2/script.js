
// $(function() {
//     function removeNote() {
//         $(".remove-note").off('click').on('click', function(event) {
//           event.stopPropagation();
//           $(this).parents('.single-note-item').remove();
//         })
//     }

//     function favouriteNote() {
//         $(".favourite-note").off('click').on('click', function(event) {
//           event.stopPropagation();
//           $(this).parents('.single-note-item').toggleClass('note-favourite');
//         })
//     }

//     function addLabelGroups() {
//         $('.category-selector .badge-group-item').off('click').on('click', function(event) {
//           event.preventDefault();
//           /* Act on the event */
//           var getclass = this.className;
//           var getSplitclass = getclass.split(' ')[0];
//           if ($(this).hasClass('badge-business')) {
//             $(this).parents('.single-note-item').removeClass('note-social');
//             $(this).parents('.single-note-item').removeClass('note-important');
//             $(this).parents('.single-note-item').toggleClass(getSplitclass);
//           } else if ($(this).hasClass('badge-social')) {
//             $(this).parents('.single-note-item').removeClass('note-business');
//             $(this).parents('.single-note-item').removeClass('note-important');
//             $(this).parents('.single-note-item').toggleClass(getSplitclass);
//           } else if ($(this).hasClass('badge-important')) {
//             $(this).parents('.single-note-item').removeClass('note-social');
//             $(this).parents('.single-note-item').removeClass('note-business');
//             $(this).parents('.single-note-item').toggleClass(getSplitclass);
//           }
//         });
//     }

//     var $btns = $('.note-link').click(function() {
//         if (this.id == 'all-category') {
//           var $el = $('.' + this.id).fadeIn();
//           $('#note-full-container > div').not($el).hide();
//         } if (this.id == 'important') {
//           var $el = $('.' + this.id).fadeIn();
//           $('#note-full-container > div').not($el).hide();
//         } else {
//           var $el = $('.' + this.id).fadeIn();
//           $('#note-full-container > div').not($el).hide();
//         }
//         $btns.removeClass('active');
//         $(this).addClass('active');  
//     })

//     $('#add-notes').on('click', function(event) {
//         $('#addnotesmodal').modal('show');
//         $('#btn-n-save').hide();
//         $('#btn-n-add').show();
//     })

//     // Button add
//     $("#btn-n-add").on('click', function(event) {
//         event.preventDefault();
//         /* Act on the event */
//         var today = new Date();
//       var dd = String(today.getDate()).padStart(2, '0');
//       var mm = String(today.getMonth()); //January is 0!
//       var yyyy = today.getFullYear();
//       var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
//       today = dd + ' ' + monthNames[mm]  + ' ' + yyyy;

//         var $_noteTitle = document.getElementById('note-has-title').value;
//         var $_noteDescription = document.getElementById('note-has-description').value;

//         $html =     '<div class="col-md-4 single-note-item all-category"><div class="card card-body">' +
//                                 '<span class="side-stick"></span>' +
//                                 '<h5 class="note-title text-truncate w-75 mb-0" data-noteHeading="'+$_noteTitle+'">'+$_noteTitle+'<i class="point fa fa-circle ml-1 font-10"></i></h5>' +
//                                 '<p class="note-date font-12 text-muted">'+today+'</p>' +
//                                 '<div class="note-content">' +
//                                     '<p class="note-inner-content text-muted" data-noteContent="'+$_noteDescription+'">'+$_noteDescription+'</p>' +
//                                 '</div>' +
//                                 '<div class="d-flex align-items-center">' +
//                                     '<span class="mr-1"><i class="fa fa-star favourite-note"></i></span>' +
//                                     '<span class="mr-1"><i class="fa fa-trash remove-note"></i></span>' +
//                                     '<div class="ml-auto">' +
//                                           '<div class="category-selector btn-group">' +
//                                                     '<a class="nav-link dropdown-toggle category-dropdown label-group p-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">' +
//                                                         '<div class="category">' +
//                                                             '<div class="category-business"></div>' +
//                                                             '<div class="category-social"></div>' +
//                                                             '<div class="category-important"></div>' +
//                                                             '<span class="more-options text-dark"><i class="icon-options-vertical"></i></span>'+
//                                                         '</div>' +
//                                                     '</a>' +
//                                                     '<div class="dropdown-menu dropdown-menu-right category-menu">' +
//                                                         '<a class="note-business badge-group-item badge-business dropdown-item position-relative category-business text-success" href="javascript:void(0);"><i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i>Business</a>' +
//                                                         '<a class="note-social badge-group-item badge-social dropdown-item position-relative category-social text-info" href="javascript:void(0);"><i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Social</a>' +
//                                                         '<a class="note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger" href="javascript:void(0);"><i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Important</a>' +
//                                                 '</div>' +
//                                          '</div>' +
//                                     '</div>' +
//                                 '</div>' +
//                             '</div></div> ';

//         $("#note-full-container").prepend($html);
//         $('#addnotesmodal').modal('hide');

//         removeNote();
//         favouriteNote();
//         addLabelGroups();
//     });

//     $('#addnotesmodal').on('hidden.bs.modal', function (event) {
//         event.preventDefault();
//         document.getElementById('note-has-title').value = '';
//         document.getElementById('note-has-description').value = '';
//     })

//     removeNote();
//     favouriteNote();
//     addLabelGroups();

//     $('#btn-n-add').attr('disabled', 'disabled'); 
// })

//  $('#note-has-title').keyup(function() {
//       var empty = false;
//       $('#note-has-title').each(function() {
//           if ($(this).val() == '') {
//                   empty = true;
//           }
//       });

//       if (empty) {
//           $('#btn-n-add').attr('disabled', 'disabled'); 
//       } else {
//           $('#btn-n-add').removeAttr('disabled');
//       }
// }); 
















document.addEventListener('DOMContentLoaded', function () {
  // Helper to select multiple
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  
  // Remove note
  function removeNote() {
    $$('body').forEach(bodyEl => {
      bodyEl.removeEventListener('click', removeNoteHandler);
    });
    $$('.remove-note').forEach(elem => {
      elem.removeEventListener('click', removeNoteHandler);
      elem.addEventListener('click', removeNoteHandler);
    });
  }
  function removeNoteHandler(e) {
    e.stopPropagation();
    const note = e.target.closest('.single-note-item');
    if (note) note.remove();
  }

  // Favourite note toggle
  function favouriteNote() {
    $$('body').forEach(bodyEl => {
      bodyEl.removeEventListener('click', favouriteNoteHandler);
    });
    $$('.favourite-note').forEach(elem => {
      elem.removeEventListener('click', favouriteNoteHandler);
      elem.addEventListener('click', favouriteNoteHandler);
    });
  }
  function favouriteNoteHandler(e) {
    e.stopPropagation();
    const note = e.target.closest('.single-note-item');
    if (note) note.classList.toggle('note-favourite');
  }

  // Add label groups
  function addLabelGroups() {
    $$('.category-selector .badge-group-item').forEach(elem => {
      elem.removeEventListener('click', labelGroupClick);
      elem.addEventListener('click', labelGroupClick);
    });
  }
  function labelGroupClick(e) {
    e.preventDefault();
    const target = e.currentTarget;
    const note = target.closest('.single-note-item');
    if (!note) return;

    // Get first class for toggle logic
    const classList = [...target.classList].filter(c => c.startsWith('badge-') || c.startsWith('category-'));
    const primaryClass = classList.length > 0 ? classList[0] : '';

    // Reset other classes per category
    if (target.classList.contains('badge-business')) {
      note.classList.remove('note-social', 'note-important');
      note.classList.toggle(primaryClass);
    } else if (target.classList.contains('badge-social')) {
      note.classList.remove('note-business', 'note-important');
      note.classList.toggle(primaryClass);
    } else if (target.classList.contains('badge-important')) {
      note.classList.remove('note-social', 'note-business');
      note.classList.toggle(primaryClass);
    }
  }

  // Note links filter logic
  const noteLinks = $$('a.note-link');
  noteLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const id = this.id;
      let selector = '';
      if (id === 'all-category') {
        selector = '.all-category';
      } else if (id === 'note-important') {
        selector = '.note-important';
      } else {
        selector = '.' + id;
      }
      // Show matching notes
      $$(`#note-full-container > div`).forEach(div => {
        if (selector === '' || div.matches(selector)) {
          div.style.display = '';
        } else {
          div.style.display = 'none';
        }
      });
      // Update active class on links
      noteLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Modal and add notes
  const addNotesBtn = document.getElementById('add-notes');
  const addNotesModal = document.getElementById('addnotesmodal');
  const btnSave = document.getElementById('btn-n-save');
  const btnAdd = document.getElementById('btn-n-add');
  const noteTitleInput = document.getElementById('note-has-title');
  const noteDescInput = document.getElementById('note-has-description');
  const noteFullContainer = document.getElementById('note-full-container');

  function toggleModal(show) {
    if (show) {
      addNotesModal.classList.add('show');
      addNotesModal.style.display = 'block';
      addNotesModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    } else {
      addNotesModal.classList.remove('show');
      addNotesModal.style.display = 'none';
      addNotesModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      // Clear inputs
      noteTitleInput.value = '';
      noteDescInput.value = '';
      btnAdd.disabled = true;
      btnSave.style.display = 'none';
      btnAdd.style.display = '';
    }
  }

  addNotesBtn.addEventListener('click', function () {
    toggleModal(true);
  });

  // Close modal buttons
  $$('button[data-dismiss="modal"]').forEach(btn => {
    btn.addEventListener('click', function () {
      toggleModal(false);
    });
  });

  // Enable/disable Add button based on input length
  noteTitleInput.addEventListener('input', function () {
    btnAdd.disabled = this.value.trim() === '';
  });

  // Add note button click
  btnAdd.addEventListener('click', function (e) {
    e.preventDefault();
    // Date formatting
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = today.getMonth();
    const yyyy = today.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const todayFormatted = `${dd} ${monthNames[mm]} ${yyyy}`;

    // Collect note details
    const noteTitle = noteTitleInput.value.trim();
    const noteDescription = noteDescInput.value.trim();

    if (!noteTitle) return;

    const noteHtml = document.createElement('div');
    noteHtml.className = 'col-md-4 single-note-item all-category';

    noteHtml.innerHTML = `
      <div class="card card-body">
        <span class="side-stick"></span>
        <h5 class="note-title text-truncate w-75 mb-0" data-noteheading="${noteTitle}">
          ${noteTitle}<i class="point fa fa-circle ml-1 font-10"></i>
        </h5>
        <p class="note-date font-12 text-muted">${todayFormatted}</p>
        <div class="note-content">
          <p class="note-inner-content text-muted" data-noteContent="${noteDescription}">${noteDescription}</p>
        </div>
        <div class="d-flex align-items-center">
          <span class="mr-1"><i class="fa fa-star favourite-note"></i></span>
          <span class="mr-1"><i class="fa fa-trash remove-note"></i></span>
          <div class="ml-auto">
            <div class="category-selector btn-group">
              <a class="nav-link dropdown-toggle category-dropdown label-group p-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                <div class="category">
                  <div class="category-business"></div>
                  <div class="category-social"></div>
                  <div class="category-important"></div>
                  <span class="more-options text-dark"><i class="icon-options-vertical"></i></span>
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-right category-menu">
                <a class="note-business badge-group-item badge-business dropdown-item position-relative category-business text-success" href="javascript:void(0);">
                  <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i>Business
                </a>
                <a class="note-social badge-group-item badge-social dropdown-item position-relative category-social text-info" href="javascript:void(0);">
                  <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Social
                </a>
                <a class="note-important badge-group-item badge-important dropdown-item position-relative category-important text-danger" href="javascript:void(0);">
                  <i class="mdi mdi-checkbox-blank-circle-outline mr-1"></i> Important
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    if (noteFullContainer.firstChild) {
      noteFullContainer.insertBefore(noteHtml, noteFullContainer.firstChild);
    } else {
      noteFullContainer.appendChild(noteHtml);
    }
    toggleModal(false);
    // Re-bind event handlers for new elements
    removeNote();
    favouriteNote();
    addLabelGroups();
  });

  // Initial bind event handlers
  removeNote();
  favouriteNote();
  addLabelGroups();
});





const noteLinks = document.querySelectorAll('a.note-link');
noteLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.id;
    let selector = '';
    if (id === 'all-category') {
      selector = '.all-category';
    } else if (id === 'note-important') {
      selector = '.note-important';
    } else {
      selector = '.' + id;
    }
    document.querySelectorAll('#note-full-container > div').forEach(note => {
      note.style.display = note.matches(selector) ? '' : 'none';
    });
    noteLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});


function favouriteNote() {
  document.querySelectorAll('.favourite-note').forEach(star => {
    star.addEventListener('click', e => {
      e.stopPropagation();
      const parent = star.closest('.single-note-item');
      if (parent.classList.contains('note-favourite')) {
        parent.classList.remove('note-favourite');
      } else {
        parent.classList.add('note-favourite');
      }
    });
  });
}
