import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
// import { onMyButtonClick } from './scrolToTop';
import ApiService from './fetchProdactsAPI';
import { renderFilmCard } from './renderFunction';
import { refs } from './refs';

const apiService = new ApiService();

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export const pagination = new Pagination('pagination', options);

pagination.on('afterMove', loadMoreFilms);

async function loadMoreFilms(event) {
  // onMyButtonClick();
  // paginationBackToTop();
  const currentPage = event.page;
  apiService.pageNum = currentPage;

  const results = await apiService.getPopularFilms();
  renderFilmCard(results);
}

export function cleanPagination() {
  refs.paginationList.innerHTML = '';
}

// export function paginationBackToTop() {
//   let button = $('.tui-pagination');
//   $(window).on('scroll', () => {
//     if ($(this).scrollTop() >= 50) {
//       button.fadeIn();
//     } else {
//       button.fadeOut();
//     }
//   });
//   button.on('click', e => {
//     e.preventDefault();
//     $('html').animate({ scrollTop: 0 }, 100);
//   });
//   console.log('I am done');
// }
