export interface TypeBilibiliVideoView {
  bvid: string;
  aid: number;
  videos: number;
  tid: number;
  tid_v2: number;
  tname: string;
  tname_v2: string;
  copyright: number;
  pic: string;
  title: string;
  pubdate: number;
  ctime: number;
  desc: string;
  desc_v2: Descv2[];
  state: number;
  duration: number;
  mission_id: number;
  rights: Rights;
  owner: Owner;
  stat: Stat;
  argue_info: Argueinfo;
  dynamic: string;
  cid: number;
  dimension: Dimension;
  season_id: number;
  premiere: null;
  teenage_mode: number;
  is_chargeable_season: boolean;
  is_story: boolean;
  is_upower_exclusive: boolean;
  is_upower_play: boolean;
  is_upower_preview: boolean;
  enable_vt: number;
  vt_display: string;
  is_upower_exclusive_with_qa: boolean;
  is_hua_sheng: boolean;
  no_cache: boolean;
  pages: import("@/main/video/TypeVideo").VIDEO_PART[];
  subtitle: Subtitle;
  label: Label;
  ugc_season: Ugcseason;
  is_season_display: boolean;
  user_garb: Usergarb;
  honor_reply: Honorreply;
  like_icon: string;
  need_jump_bv: boolean;
  disable_show_up_info: boolean;
  is_story_play: number;
  is_view_self: boolean;
}

interface Honorreply {
  honor: Honor[];
}

interface Honor {
  aid: number;
  type: number;
  desc: string;
  weekly_recommend_num: number;
}

interface Usergarb {
  url_image_ani_cut: string;
}

interface Ugcseason {
  id: number;
  title: string;
  cover: string;
  mid: number;
  intro: string;
  sign_state: number;
  attribute: number;
  stat: Stat2;
  ep_count: number;
  season_type: number;
  is_pay_season: boolean;
  enable_vt: number;
  sections: Section[];
}

interface Section {
  season_id: number;
  id: number;
  title: string;
  type: number;
  episodes: Episode[];
}

interface Episode {
  season_id: number;
  section_id: number;
  id: number;
  aid: number;
  cid: number;
  title: string;
  attribute: number;
  arc: Arc;
  page: Page2;
  bvid: string;
  pages: Page2[];
}

interface Page2 {
  cid: number;
  page: number;
  from: string;
  part: string;
  duration: number;
  vid: string;
  weblink: string;
  dimension: Dimension;
}

interface Arc {
  aid: number;
  videos: number;
  type_id: number;
  type_name: string;
  copyright: number;
  pic: string;
  title: string;
  pubdate: number;
  ctime: number;
  desc: string;
  state: number;
  duration: number;
  rights: Rights2;
  author: Owner;
  stat: Stat3;
  dynamic: string;
  dimension: Dimension;
  desc_v2: null;
  is_chargeable_season: boolean;
  is_blooper: boolean;
  enable_vt: number;
  vt_display: string;
  type_id_v2: number;
  type_name_v2: string;
  is_lesson_video: number;
}

interface Stat3 {
  aid: number;
  view: number;
  danmaku: number;
  reply: number;
  fav: number;
  coin: number;
  share: number;
  now_rank: number;
  his_rank: number;
  like: number;
  dislike: number;
  evaluation: string;
  argue_msg: string;
  vt: number;
  vv: number;
}

interface Rights2 {
  bp: number;
  elec: number;
  download: number;
  movie: number;
  pay: number;
  hd5: number;
  no_reprint: number;
  autoplay: number;
  ugc_pay: number;
  is_cooperation: number;
  ugc_pay_preview: number;
  arc_pay: number;
  free_watch: number;
}

interface Stat2 {
  season_id: number;
  view: number;
  danmaku: number;
  reply: number;
  fav: number;
  coin: number;
  share: number;
  now_rank: number;
  his_rank: number;
  like: number;
  vt: number;
  vv: number;
}

interface Label {
  type: number;
}

interface Subtitle {
  allow_submit: boolean;
  list: any[];
}

interface Dimension {
  width: number;
  height: number;
  rotate: number;
}

interface Argueinfo {
  argue_msg: string;
  argue_type: number;
  argue_link: string;
}

interface Stat {
  aid: number;
  view: number;
  danmaku: number;
  reply: number;
  favorite: number;
  coin: number;
  share: number;
  now_rank: number;
  his_rank: number;
  like: number;
  dislike: number;
  evaluation: string;
  vt: number;
}

interface Owner {
  mid: number;
  name: string;
  face: string;
}

interface Rights {
  bp: number;
  elec: number;
  download: number;
  movie: number;
  pay: number;
  hd5: number;
  no_reprint: number;
  autoplay: number;
  ugc_pay: number;
  is_cooperation: number;
  ugc_pay_preview: number;
  no_background: number;
  clean_mode: number;
  is_stein_gate: number;
  is_360: number;
  no_share: number;
  arc_pay: number;
  free_watch: number;
}

interface Descv2 {
  raw_text: string;
  type: number;
  biz_id: number;
}
