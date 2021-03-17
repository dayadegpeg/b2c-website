import { Component, OnInit } from '@angular/core';
import { WebHomeService } from './web-home.service';

@Component({
  selector: 'app-web-home',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.scss'],
})
export class WebHomeComponent implements OnInit {
  ngAfterViewInit() {
    this.loadScript('../../assets/js/custom.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  now_playing: any = [
    {
      name: 'Tune Inn',
      category: 'Music',
      img:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/web-session-banners/tune_in_video3_thumbnail_web.webp',
    },
    {
      name: 'Desi Tech Review',
      category: 'Tech',
      img:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/web-session-banners/desi_tech_review_thumbnail_web.webp',
    },
    {
      name: 'What The Tech',
      category: 'Tech',
      img:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/web-session-banners/what_the_tech_thumbnail_web.webp',
    },
    {
      name: 'फ se Funny!',
      category: 'Comedy',
      img:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/session-banners/fa_se_funny_thumbnail_web.webp',
    },
    {
      name: 'Upcoming Cars of 2021',
      category: 'Automobiles',
      img:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/web-session-banners/car_o_clock_video2_thumbnail_web.webp',
    },
  ];

  automobiles: any = [
    {
      name: 'Upcoming Cars of 2021',
      img:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/web-session-banners/car_o_clock_video2_thumbnail_web.webp',
    },
    {
      name: "Car O' Clock",
      img:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/web-session-banners/car_o_clock_video1_poster_web.webp',
    },
    {
      name: 'Upcoming Cars of 2021',
      img:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/web-session-banners/car_o_clock_video2_thumbnail_web.webp',
    },
    {
      name: "Car O' Clock",
      img:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/web-session-banners/car_o_clock_video1_poster_web.webp',
    },
    {
      name: 'Upcoming Cars of 2021',
      img:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/web-session-banners/car_o_clock_video2_thumbnail_web.webp',
    },
    {
      name: "Car O' Clock",
      img:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/web-session-banners/car_o_clock_video1_poster_web.webp',
    },
  ];

  host_images: any = [
    {
      first_name: 'Rishabh',
      alias: "Car O' Clock",
      image_url:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/avatar/Rishabh.png',
    },
    {
      first_name: 'Priyali',
      alias: 'the glam project',
      image_url:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/avatar/2020120923522808_save-01.jpeg',
    },
    {
      first_name: 'Hiren',
      alias: 'Style Unplugged',
      image_url:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/avatar/LRM_EXPORT_72140716333673_20190914_193403085.jpeg.jpg',
    },
    {
      first_name: 'Shivam',
      alias: 'Tune Inn',
      image_url:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/avatar/shivam_profile.JPG',
    },
    {
      first_name: 'Shoubik',
      alias: 'फ se Funny!',
      image_url:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/avatar/soubik_profile.jpg',
    },
    {
      first_name: 'Unnati',
      alias: 'Cosmetic Rush',
      image_url:
        'https://degpeg-file-storage.s3.ap-south-1.amazonaws.com/avatar/unnati_profile.jpeg',
    },
  ];
  live_sessions: any = [];
  planned_sessions: any = [];
  completed_sessions: any = [];
  today_live_session: any = [];
  pg: any = {};
  category_slider_title: string = '';
  livesession_category: any;
  filtered_sessions: any = [];
  showNxtBtn: boolean = false;
  selectedSessionUrl: string = '';
  selectedSession: any;
  promotionBanners: any = [];
  logoUrl: string = '';
  entertainmentCarouselOpts: any = {};
  new_sessions: any = [];
  isMenuCollapsed: boolean = true;
  comedySessions: any = [];
  techSessions: any = [];
  musicSessions: any = [];
  lifestyleSessions: any = [];
  session_car_comedy_ops: any = {};
  session_car_tech_opts: any = {};
  session_car_music_opts: any = {};
  session_car_lifestyle_opts: any = {};
  selected_catgs: any = [];
  isLogin: boolean = false;
  showCategoryDropdown: boolean = false;
  automobileSessions: any = [];
  session_automobile_opts: any = {};
  test_sess: any = [];
  promotions: any = [];

  constructor(private _hs: WebHomeService) {
    this.pg.pg_size = 5;
    this.pg.pg_no = 1;
    this.pg.pg_offset =
      this.pg.pg_no > 1 ? (this.pg.pg_no - 1) * this.pg.pg_size : 0;
  }

  ngOnInit() {
    this.getSessionCategories();
    this.getSessions('planned', this.pg);
    this.getSessions('completed', this.pg);
    this.getSessions('live', this.pg);
    this.getPromotions();
  }

  getSessionBasedOnCatgs() {
    for (let cid of this.new_sessions) {
      if (cid.liveSessionCategoryId === '600828ccf2895e2eabcc2afd') {
        this.comedySessions.push(cid);
      }
      if (cid.liveSessionCategoryId === '60080e5af2895e2eabcc2aea') {
        this.techSessions.push(cid);
      }
      if (cid.liveSessionCategoryId === '60080ae9f2895e2eabcc2ae7') {
        this.musicSessions.push(cid);
      }
      if (cid.liveSessionCategoryId === '60080c8af2895e2eabcc2ae9') {
        this.lifestyleSessions.push(cid);
      }
      if (cid.liveSessionCategoryId === '6017d3c6690cf1193093abf4') {
        this.automobileSessions.push(cid);
      }
    }

    this.extendSessionData('600828ccf2895e2eabcc2afd');
    this.extendSessionData('60080e5af2895e2eabcc2aea');
    this.extendSessionData('60080ae9f2895e2eabcc2ae7');
    this.extendSessionData('60080c8af2895e2eabcc2ae9');
    this.extendSessionData('6017d3c6690cf1193093abf4');
  }

  extendSessionData(id: string) {
    if (id === '600828ccf2895e2eabcc2afd') {
      if (this.comedySessions.length < 4) {
        let filler_videos_length = 4 - this.comedySessions.length;
        for (let i = 0; i < filler_videos_length; i++) {
          this.comedySessions.push(this.comedySessions[i]);
        }
      }
    }
    if (id === '60080e5af2895e2eabcc2aea') {
      if (this.techSessions.length < 4) {
        let filler_videos_length = 4 - this.techSessions.length;
        for (let i = 0; i < filler_videos_length; i++) {
          this.techSessions.push(this.techSessions[i]);
        }
      }
    }
    if (id === '60080ae9f2895e2eabcc2ae7') {
      if (this.musicSessions.length < 4) {
        let filler_videos_length = 4 - this.musicSessions.length;
        for (let i = 0; i < filler_videos_length; i++) {
          this.musicSessions.push(this.musicSessions[i]);
        }
      }
    }
    if (id === '60080c8af2895e2eabcc2ae9') {
      if (this.lifestyleSessions.length < 4) {
        let filler_videos_length = 4 - this.lifestyleSessions.length;
        for (let i = 0; i < filler_videos_length; i++) {
          this.lifestyleSessions.push(this.lifestyleSessions[i]);
        }
      }
    }
    if (id === '6017d3c6690cf1193093abf4') {
      if (this.automobileSessions.length < 4) {
        let filler_videos_length = 4 - this.automobileSessions.length;
        for (let i = 0; i < filler_videos_length; i++) {
          this.automobileSessions.push(this.automobileSessions[i]);
        }
      }
    }
  }

  getSessions(session_type: string, pagination: any) {
    if (session_type == 'planned') {
      this._hs
        .getSessionsApi(session_type, pagination)
        .subscribe((response) => {
          this.planned_sessions = response;
        });
    } else if (session_type == 'completed') {
      this._hs
        .getSessionsApi(session_type, pagination)
        .subscribe((response) => {
          this.completed_sessions = response;
        });
    } else if (session_type == 'live') {
      this._hs
        .getSessionsApi(session_type, pagination)
        .subscribe((response) => {
          // console.log("live sessions", response);
          this.live_sessions = response;
          this.new_sessions = response;
          console.log(this.new_sessions);
          for (let session of this.live_sessions) {
            if (!this.selected_catgs.includes()) {
              this.selected_catgs.push(session.liveSessionCategoryId);
            }
          }
          if (this.new_sessions.length > 0) {
            this.selectedSession = this.new_sessions[0];
            this.selectedSessionUrl = this.new_sessions[0].web_banner_url;
          }
          this.getSessionBasedOnCatgs();
        });
    }
  }

  getSessionCategories() {
    this._hs.getSessionCategoriesApi().subscribe((response: any) => {
      this.livesession_category = response;
      this.category_slider_title = this.livesession_category[0].id;
      this.filterSessionByCategory(this.category_slider_title);
      if (this.livesession_category.length > 4) {
        this.showNxtBtn = true;
      }
      if (this.livesession_category.length <= 4) {
        this.showNxtBtn = false;
      }
    });
  }

  getPromotions() {
    this._hs.getPromotionsApi().subscribe((response) => {
      this.promotions = response;
    });
  }

  segmentChanged(event: { detail: { value: string } }) {
    this.filterSessionByCategory(event.detail.value);
  }

  filterSessionByCategory(session_category_id: string) {
    this.live_sessions = [];
    this._hs
      .getFilteredSessionApi(session_category_id, 'live', this.pg)
      .subscribe((response) => {
        this.live_sessions = response;
      });
  }

  registerInfluencer() {
    window.open('http://' + 'app.degpeg.com/influencer/register', '_blank');
  }
}
