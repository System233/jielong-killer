export interface GetThreadDetailReqDto {
	threadId: number|string;
}
export interface GetCheckInRecordsReqDto {
	pageIndex: number|string;
	pageSize: number|string;
	threadId: number|string;
	dateTarget: string;
	userId: number|string;
	sortBy: number|string;
	number: string;
	signature: string;
	isShowCommentAndAttitude: boolean|string;
	isGetAll: boolean|string;
	minuteTarget: string;
}
export interface LoginReqDto {
	key: string;
}
export interface PCAuthReqDto {
	code: string;
}
export interface CheckLoginStatusReqDto {
	key: string;
}
export interface VerfyPCCodeReqDto {
	code: string;
}
export interface GetEditCheckInRecordReqDto {
	threadId: number|string;
	recordId: number|string;
	isFillCheckIn: boolean|string;
	fillSignature: string;
	fillNumber: number|string;
}
export interface GetCheckInStudentIdRecordsReqDto {
	threadId: number|string;
	dateTarget: number|string;
	pageIndex: number|string;
	pageSize: number|string;
}
export interface WxAuthReqDto {
	AvatarUrl: string;
	Nickname: string;
	Code: string;
	InviteUserId: string;
}
export interface GetThreadDetailShareimageDto {
	InsetUrl: string;
	RelativePath: string;
	TenantTypeId: string;
	Size: number;
	FileName: string;
	ExtendName: string;
	Url: string;
	MediaType: number;
}
export interface GetThreadDetailCoverimageDto {
	InsetUrl: string;
	RelativePath: string;
	TenantTypeId: string;
	Size: number;
	FileName: string;
	ExtendName: string;
	Url: string;
	MediaType: number;
}
export interface GetThreadDetailThreadbodyDto {
	Id: number;
	ContentType: number;
	Body: string;
}
export interface GetThreadDetailCheckininfoCheckinstatusDto {
	AllowCheckIn: boolean;
	CheckInMsg: string;
	IsTodayAgent: boolean;
	HasNotAttendTypes: boolean;
}
export interface GetThreadDetailCheckininfoDto {
	NumberRange: string;
	IsEnabledNumber: boolean;
	IsEnabledName: boolean;
	NumberName: string;
	IsAllowReview: boolean;
	Cycle: number;
	ResultType: number;
	DateTarget: string;
	DisplayDateTarget: string;
	ShareDateTarget: string;
	StartTime: string;
	EndTime: string;
	AllowFillCount: number;
	AllowFill: boolean;
	CheckInStartTime: string;
	CheckInEndTime: string;
	RemindTime: string;
	Frequency: number[];
	CheckInStatus: GetThreadDetailCheckininfoCheckinstatusDto;
	IsMultiCheckInUser: boolean;
	AllowAgent: boolean;
	IsNeedRemind: boolean;
	IsEnabledRemind: boolean;
	CheckInUserRemindTime: string;
	LackCount: number;
	IsShowLackCount: boolean;
	CheckInCount: number;
	CheckInDay: number;
	CheckInUserCount: number;
	Rank: number;
	TodayCheckInRecordId: number;
	Number: number;
	Signature: string;
	EnableDelete: boolean;
	EnableEdit: boolean;
	TodayCheckInCount: number;
	IsEnabledMutiple: number;
	MinCheckInTimes: number;
	MutipleCheckInCount: number;
	MutipleCheckInRanges: null;
	HasStatisticTypes: boolean;
}
export interface GetThreadDetailDto {
	ThreadId: number;
	ThreadStrId: string;
	Author: string;
	Avatar: string;
	Subject: string;
	ThreadType: number;
	ApprovalStatus: number;
	DeleteStatus: number;
	IsMember: boolean;
	IsAuditUser: boolean;
	DataModified: string;
	FileModified: string;
	IsPublicer: boolean;
	IsManager: boolean;
	IsAuthorMember: boolean;
	DateCreated: string;
	ViewCount: number;
	AttendCount: number;
	ThreadStatus: number;
	ShareImageUrl: string;
	ShareImage: GetThreadDetailShareimageDto;
	CoverImage: GetThreadDetailCoverimageDto;
	IsAllowClone: boolean;
	IsAllowShare: boolean;
	IsAllowComment: boolean;
	HasPositionSetting: boolean;
	AttendButtonText: string;
	AttendPageSetting: null;
	GroupId: number;
	GroupName: string;
	IsGroupMaster: boolean;
	PositionSetting: null;
	ThreadBody: GetThreadDetailThreadbodyDto[];
	FeedbackInfo: null;
	FormInfo: null;
	EventInfo: null;
	CheckInInfo: GetThreadDetailCheckininfoDto;
	ReservationInfo: null;
	VoteInfo: null;
	HomeworkInfo: null;
	ExamInfo: null;
}
export interface VerfyPCCodeDto {
	status: number;
}
export interface EditCheckInRecordReqRecordvaluesDto {
	FieldId: number;
	Values: string[];
	Texts: string[];
	Scores: [];
	Files: [];
	MatrixValues: [];
	HasValue: boolean;
	OtherValue: string;
}
export interface EditCheckInRecordReqDto {
	Id: number;
	ThreadId: string;
	Number: string;
	Signature: string;
	RecordValues: EditCheckInRecordReqRecordvaluesDto[];
	DateTarget: string;
	IsNeedManualAudit: boolean;
	MinuteTarget: number;
	IsNameNumberComfirm: boolean;
}
export interface GetCheckInRecordsRecordvaluesDto {
	FieldId: number;
	Texts: string[];
	Values: string[];
	Files: [];
	OtherValue: string;
}
export interface GetCheckInRecordsDisplayrecordvaluesDto {
	Name: string;
	Texts: string[];
	Files: [];
	FieldType: number;
}
export interface GetCheckInRecordsAttitudeDto {
	RecordNames: null;
	IsAttitude: boolean;
}
export interface GetCheckInRecordsDto {
	ThreadStrId: string;
	Id: string;
	UserId: string;
	Avatar: string;
	NickName: string;
	IsPublicer: boolean;
	IsManager: boolean;
	IsEnabledNumber: boolean;
	IsEnabledName: boolean;
	NumberName: string;
	IsFillCheckIn: boolean;
	ApprovalStatus: number;
	Signature: string;
	Number: number;
	RecordValues: GetCheckInRecordsRecordvaluesDto[];
	DisplayRecordValues: GetCheckInRecordsDisplayrecordvaluesDto[];
	RealDateCreated: string;
	DateCreated: string;
	IsCurrentUser: boolean;
	CheckInTimes: number;
	EnabledDelete: boolean;
	EnabledEdit: boolean;
	EnabledEditSignature: boolean;
	EnabledComment: boolean;
	IsShowContent: boolean;
	Comments: null;
	CommentCount: number;
	Attitude: GetCheckInRecordsAttitudeDto;
	Score: null;
}
export interface GetCheckInStudentIdRecordsStudentidsDto {
	UserId: number;
	Signature: string;
	IsAttended: boolean;
	IsComplete: boolean;
}
export interface GetCheckInStudentIdRecordsDto {
	StudentIds: GetCheckInStudentIdRecordsStudentidsDto[];
	IsCurrentAttend: boolean;
	AttendCount: number;
	TotalCount: number;
	HasLongSignature: boolean;
}
export interface GetEditCheckInRecordCheckinsettingSignatureDto {
	Name: string;
	IsBuiltIn: boolean;
	Id: number;
	FieldType: number;
	Tip: string;
	Defaultvalue: string;
	Verify: number;
	IsTextarea: boolean;
	Unit: string;
	Precision: string;
	Rows: number;
	MinLength: number;
	MaxLength: number;
	ControlOptions: null;
	DateType: number;
	MaxImageCount: number;
	ImageUploadMode: number;
	ImageWatermark: number;
	IsRequired: boolean;
	PositionAdjustableRange: number;
	IsOnlyProvince: boolean;
	RelationId: string;
	VisibilityCondition: null;
	Files: null;
}
export interface GetEditCheckInRecordCheckinsettingSettingsDto {
	Name: string;
	IsBuiltIn: boolean;
	Id: number;
	FieldType: number;
	Tip: string;
	Defaultvalue: string;
	Verify: number;
	IsTextarea: boolean;
	Unit: string;
	Precision: string;
	Rows: number;
	MinLength: number;
	MaxLength: number;
	ControlOptions: GetEditCheckInRecordCheckinsettingSettingsControloptionsDto;
	DateType: number;
	MaxImageCount: number;
	ImageUploadMode: number;
	ImageWatermark: number;
	IsRequired: boolean;
	PositionAdjustableRange: number;
	IsOnlyProvince: boolean;
	RelationId: string;
	VisibilityCondition: [];
	Files: null;
}
export interface GetEditCheckInRecordCheckinsettingSettingsControloptionsOptionsDto {
	Text: string;
	Image: null;
	Value: string;
	IsOtherOption: boolean;
}
export interface GetEditCheckInRecordCheckinsettingSettingsControloptionsDto {
	MaxIndex: number;
	MinSelectCount: number;
	MaxSelectCount: number;
	HasOtherOption: boolean;
	Options: GetEditCheckInRecordCheckinsettingSettingsControloptionsOptionsDto[];
}
export interface GetEditCheckInRecordCheckinsettingDto {
	Signature: GetEditCheckInRecordCheckinsettingSignatureDto;
	Settings: GetEditCheckInRecordCheckinsettingSettingsDto[];
	Audio: null;
	Images: null;
	Video: null;
	Files: null;
}
export interface GetEditCheckInRecordDto {
	Subject: string;
	IsEnabledNumber: boolean;
	IsEnabledName: boolean;
	Number: string;
	Signature: string;
	NumberName: string;
	CheckInSetting: GetEditCheckInRecordCheckinsettingDto;
	CheckInRecord: null;
	LastFillCheckInCount: number;
	FillCheckInCount: number;
	LackData: null;
	IsAuthorMember: boolean;
}
export interface PCAuthDto {
	status: number;
}
export interface GetCurrentUserForminfoDto {
	Number: string;
	Signature: string;
	CommentAuthor: null;
	Author: string;
	Nickname: string;
	Name: string;
	FormUserName: string;
	Gender: null;
	Moblie: string;
	GroupNickname: null;
	Wechat: null;
	Address: null;
	IdCard: null;
	Birthday: null;
	Email: null;
	School: null;
	Colleges: null;
	Class: null;
	StudentNumber: null;
	JobNumber: null;
	Company: null;
	Units: null;
	Department: null;
	Position: null;
	ChildName: null;
}
export interface GetCurrentUserBindinfoDto {
	IsBind: boolean;
	Nickname: null;
	MiniType: number;
}
export interface GetCurrentUserDto {
	Id: number;
	OpenId: string;
	Nickname: string;
	IsMember: boolean;
	Mobile: null;
	Avatar: string;
	ExperiencePoints: number;
	TradePoints: number;
	NoticeSetting: number;
	FormInfo: GetCurrentUserForminfoDto;
	IsBanned: boolean;
	BanReason: string;
	ViewCount: number;
	IsFollowMP: boolean;
	IsTemplateManage: boolean;
	IsWechat: boolean;
	VisitMiniType: number;
	BindInfo: GetCurrentUserBindinfoDto;
}
export interface GetTokenReqDto {
	code: string;
}
export interface GetTokenDto {
	Token: string;
	IsNew: boolean;
}
export interface API {
	Login: [LoginReqDto,null];
	GetThreadDetail: [GetThreadDetailReqDto,GetThreadDetailDto];
	VerfyPCCode: [VerfyPCCodeReqDto,VerfyPCCodeDto];
	CheckLoginStatus: [CheckLoginStatusReqDto,undefined];
	GetCheckInRecords: [GetCheckInRecordsReqDto,GetCheckInRecordsDto[]];
	GetCheckInStudentIdRecords: [GetCheckInStudentIdRecordsReqDto,GetCheckInStudentIdRecordsDto];
	GetEditCheckInRecord: [GetEditCheckInRecordReqDto,GetEditCheckInRecordDto];
	PCAuth: [null,PCAuthDto];
	WxAuth: [WxAuthReqDto,string];
	GetToken: [GetTokenReqDto,GetTokenDto];
	EditCheckInRecord: [EditCheckInRecordReqDto,string];
	GetCurrentUser: [null,GetCurrentUserDto];
}
export interface Response<T> {
    Type: string;
    Data: T;
    Description: string;
}
export interface IAPI{
    method:'GET'|'POST';
    url:string;
    headers:Record<string,string>;
    params:string[]|null
}
export type IAPIMap=Record<string,IAPI>;
export const APIMap:IAPIMap={
  GetThreadDetail: {
    method: 'GET',
    url: 'https://h-api.jielong.co/api/Thread/GetThreadDetail',
    headers: {
      Referer: 'https://servicewechat.com/wx36ddf2a92cbb7814/362/page-frame.html'
    },
    params: [ 'threadId' ]
  },
  GetCheckInRecords: {
    method: 'GET',
    url: 'https://h-api.jielong.co/api/Thread/GetCheckInRecords',
    headers: {},
    params: [
      'pageIndex',
      'pageSize',
      'threadId',
      'dateTarget',
      'userId',
      'sortBy',
      'number',
      'signature',
      'isShowCommentAndAttitude',
      'isGetAll',
      'minuteTarget'
    ]
  },
  GetToken: {
    method: 'POST',
    url: 'https://h-api.jielong.co/api/User/GetToken',
    headers: {
      Host: 'h-api.jielong.co',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 9; INE-AL00 Build/HUAWEIINE-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3211 MMWEBSDK/20211001 Mobile Safari/537.36 MMWEBID/9728 MicroMessenger/8.0.16.2040(0x28001057) Process/appbrand2 WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android',
      Referer: 'https://servicewechat.com/wx36ddf2a92cbb7814/362/page-frame.html'
    },
    params: null
  },
  Login: {
    method: 'GET',
    url: 'https://jielong.co/Portal/Login',
    headers: {
      Host: 'jielong.co',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'Upgrade-Insecure-Requests': '1',
      DNT: '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Dest': 'document',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-CN,zh;q=0.9',
      Cookie: '.AspNetCore.Antiforgery.ZERLej8lsvo=CfDJ8HHpOwHxPO9Ot5G_jYaCMCy3DBeMlZ8YQbOxFEhZa6ARbQ-tsox5y3bj76WCYySF8_ym8hS5gA6gqfQ-bKPWRQo-A8jHbv7p5_w6uB_C11qzVqvNKfX-25pQazlPPGtLv5MfEqmLqefxXeVQqjEImVk; Hm_lvt_900c018b32af475872a1fae69d475a11=1647153025; Hm_lpvt_900c018b32af475872a1fae69d475a11=1647153025'
    },
    params: [ 'key' ]
  },
  PCAuth: {
    method: 'POST',
    url: 'https://h-api.jielong.co/api/User/PCAuth',
    headers: {
      Referer: 'https://servicewechat.com/wx36ddf2a92cbb7814/362/page-frame.html'
    },
    params: [ 'code' ]
  },
  CheckLoginStatus: {
    method: 'GET',
    url: 'https://jielong.co/Portal/CheckLoginStatus',
    headers: {
      Host: 'jielong.co',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
      Accept: '*/*',
      DNT: '1',
      'X-Requested-With': 'XMLHttpRequest',
      'sec-ch-ua-mobile': '?0',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
      'sec-ch-ua-platform': '"Windows"',
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Dest': 'empty',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-CN,zh;q=0.9',
      Cookie: '.AspNetCore.Antiforgery.ZERLej8lsvo=CfDJ8HHpOwHxPO9Ot5G_jYaCMCy3DBeMlZ8YQbOxFEhZa6ARbQ-tsox5y3bj76WCYySF8_ym8hS5gA6gqfQ-bKPWRQo-A8jHbv7p5_w6uB_C11qzVqvNKfX-25pQazlPPGtLv5MfEqmLqefxXeVQqjEImVk; Hm_lvt_900c018b32af475872a1fae69d475a11=1647153025; Hm_lpvt_900c018b32af475872a1fae69d475a11=1647153025'
    },
    params: [ 'key' ]
  },
  VerfyPCCode: {
    method: 'GET',
    url: 'https://h-api.jielong.co/api/User/VerfyPCCode',
    headers: {
      Referer: 'https://servicewechat.com/wx36ddf2a92cbb7814/362/page-frame.html'
    },
    params: [ 'code' ]
  },
  WxAuth: {
    method: 'POST',
    url: 'https://h-api.jielong.co/api/User/WxAuth',
    headers: {
      Referer: 'https://servicewechat.com/wx36ddf2a92cbb7814/362/page-frame.html'
    },
    params: null
  },
  EditCheckInRecord: {
    method: 'POST',
    url: 'https://h-api.jielong.co/api/Thread/EditCheckInRecord',
    headers: {},
    params: null
  },
  GetEditCheckInRecord: {
    method: 'GET',
    url: 'https://h-api.jielong.co/api/Thread/GetEditCheckInRecord',
    headers: {},
    params: [
      'threadId',
      'recordId',
      'isFillCheckIn',
      'fillSignature',
      'fillNumber'
    ]
  },
  GetCurrentUser: {
    method: 'POST',
    url: 'https://h-api.jielong.co/api/User/GetCurrentUser',
    headers: {},
    params: null
  },
  GetCheckInStudentIdRecords: {
    method: 'GET',
    url: 'https://h-api.jielong.co/api/Thread/GetCheckInStudentIdRecords',
    headers: {},
    params: [ 'threadId', 'dateTarget', 'pageIndex', 'pageSize' ]
  }
}
