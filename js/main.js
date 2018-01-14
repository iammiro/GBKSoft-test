'use strict';

window.addEventListener('load', function () {

  var openSidebar = document.getElementById('openSidebar');
  console.log(openSidebar);

  var openSidebarHandler = function openSidebarHandler() {
    var sidebar = document.getElementById('sidebar-wrapper');
    console.log(sidebar);
    sidebar.classList.toggle('hidden');
  };

  openSidebar.addEventListener('click', openSidebarHandler);
});