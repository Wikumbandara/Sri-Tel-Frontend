import React from 'react';
import { CSidebar, CSidebarNav,CNavItem } from '@coreui/react';

const SideBar = () => {
    return (
        <div class="sidebar border-end">
  <div class="sidebar-header border-bottom">
    <div class="sidebar-brand">CoreUI</div>
  </div>
  <ul class="sidebar-nav">
    <li class="nav-title">Nav Title</li>
    <li class="nav-item">
      <a class="nav-link active" href="#">
        <i class="nav-icon cil-speedometer"></i> Nav item
      </a>
    </li>
    
    
  </ul>
  <div class="sidebar-footer border-top d-flex">
    <button class="sidebar-toggler" type="button"></button>
  </div>
</div>
    );
};

export default SideBar;
