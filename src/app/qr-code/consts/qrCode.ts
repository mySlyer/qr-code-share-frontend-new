export enum QRCodeType {
	// 微信群二维码
	WECHAT_GROUP = 0,
	// 个人二维码
	PERSONAL = 1,
	//   微信公众号
	WECHAT_GZH = 2,
	//   微信小程序
	WECHAT_XCX = 3,
	// 微信订阅号
	WECHAT_GZ = 4,
	// 微信服务号
	WECHAT_FW = 5,
	// 微信企业号
	WECHAT_QY = 6,
}
export const QRCodeTypeMap = {
	[QRCodeType.WECHAT_GROUP]: '微信群',
	[QRCodeType.PERSONAL]: '个人',
	[QRCodeType.WECHAT_GZH]: '微信公众号',
	[QRCodeType.WECHAT_XCX]: '微信小程序',
	[QRCodeType.WECHAT_GZ]: '微信订阅号',
	[QRCodeType.WECHAT_FW]: '微信服务号',
	[QRCodeType.WECHAT_QY]: '微信企业号',
};
export const QRCodeTypeList = [
	{
		label: '微信群',
		value: QRCodeType.WECHAT_GROUP,
	},
	{
		label: '个人',
		value: QRCodeType.PERSONAL,
	},
	{
		label: '微信公众号',
		value: QRCodeType.WECHAT_GZH,
	},
	{
		label: '微信小程序',
		value: QRCodeType.WECHAT_XCX,
	},
	{
		label: '微信订阅号',
		value: QRCodeType.WECHAT_GZ,
	},
	{
		label: '微信服务号',
		value: QRCodeType.WECHAT_FW,
	},
	{
		label: '微信企业号',
		value: QRCodeType.WECHAT_QY,
	},
];
