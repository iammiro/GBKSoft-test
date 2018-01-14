window.addEventListener('load', function () {

  const openSidebar = document.getElementById('openSidebar');
  console.log(openSidebar);

  const openSidebarHandler = () => {
    const sidebar = document.getElementById('sidebar-wrapper');
    console.log(sidebar);
    sidebar.classList.toggle('hidden');
  };

  openSidebar.addEventListener('click', openSidebarHandler);

});