export interface HospitalResponse {
  code: string;
  data: HospitalData;
  message: string;
  timestamp: string;
}

export interface HospitalData {
  address1: string;
  address2: string;
  directionGuide: string;
  hospitalId: number;
  hospitalName: string;
  instaLinkUrl: string;
  kakaoLinkUrl: string;
  naverLinkUrl: string;
  operationHours: OperationHour[];
  phoneNumber: string;
  profile: HospitalProfile;
  regularCount: number;
  staff: StaffMember[];
  urlSlug: string;
  zipCode: string;
}

export interface OperationHour {
  break_end_time: string;
  break_start_time: string;
  close_time: string;
  created: string;
  day_of_week: string;
  hospital_id: string;
  id: string;
  is_closed: string;
  open_time: string;
  updated: string;
}

export interface HospitalProfile {
  created: string;
  direction_guide: string;
  hospital_id: string;
  id: string;
  introduction_images: IntroductionImage[];
  introduction_text: string;
  logo_file_id: string;
  logo_image_url: string;
  updated: string;
}

export interface IntroductionImage {
  created: string;
  file_id: number;
  hospital_profile_id: number;
  id: number;
  image_url: string;
}

export interface StaffMember {
  created: string;
  education: string;
  hospital_id: number;
  id: number;
  introduction: string;
  name: string;
  position: string;
  profile_image_id: string;
  profile_image_url: string;
  specialty: string;
  updated: string;
}
