import { sliderRevenueFilms } from './js/slideRevenueFilms';
import { backToTop } from './js/scrolToHome';
import { ShowFilms } from './js/functionsForFilms';
import { onTeamModal } from './js/team_modal';
import { registrationModalOpen } from './js/modalRegistrationFunction';



// header
registrationModalOpen();
// main
sliderRevenueFilms();
// слайлдер з фільмами, що зібрали найбільшу касу
ShowFilms();
// фільми топ, фільми за пошуком


backToTop();
// кнопка повернення до гори

// footer
onTeamModal();



// закоментувати

//функція авторизації
import { authHandler } from './js/auth';
authHandler();
//функція авторизації

import { homeHeaderLinkBntLogic } from './js/headerBtnLinkLogic';
homeHeaderLinkBntLogic ();




// закоментувати