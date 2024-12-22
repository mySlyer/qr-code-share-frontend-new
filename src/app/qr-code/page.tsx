'use client';
import axios from 'axios';
import { Input } from '../components/ui/input';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../components/ui/hover-card';
import { useEffect } from 'react';
import { QRCodeType, QRCodeTypeList } from './consts/qrCode';
import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';
import axiosInstance from '../../lib/axiosInstance';
import { QRCodeCanvas } from 'qrcode.react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Package2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

export default function GeckoDownloadList() {
	useEffect(() => {
		// fetch('http://localhost:3000/qr-code-share').then(res => {
		// 	console.log('鹘res===>>>', res);
		// });
		axiosInstance
			.get('/qr-code-share/33')
			.then(response => {
				console.log('res===>>>', response);
				//    setUserData(response.data);
			})
			.catch(error => {
				console.error('获取用户数据出错:', error);
			});
		// setGeckoPkg(null);
	}, []);
	return (
		<article className='flex flex-1 h-0 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-y-auto'>
			<div className='items-center justify-center rounded-lg border border-dashed shadow-sm p-4'>
				<legend className='text-sm font-medium -mt-2 translate-y-[-1.1rem] bg-[hsl(var(--background))] w-fit px-1'></legend>
				{/* <SunIcon />
				<FaceIcon /> */}
				{/* <ImageIcon /> */}
				<div className='flex items-center gap-2'>
					<Package2 className='h-12 w-12' />
					<span className='text-[24px] font-bold'>微信二维码分享</span>
				</div>

				<Tabs
					defaultValue={String(QRCodeType.WECHAT_GZH)}
					className='mt-[24px]'
				>
					<TabsList>
						{QRCodeTypeList.map(item => {
							return (
								<TabsTrigger
									key={item.value}
									value={String(item.value)}
								>
									{item.label}
								</TabsTrigger>
							);
						})}
					</TabsList>
					<div className='mt-[12px] flex'>
						<Input className='w-[400px] mr-4' />
						<Button>搜索</Button>
					</div>

					<div>
						<TabsContent value={String(QRCodeType.WECHAT_GZH)}>
							<div className='flex'>
								<Card className='w-[350px]'>
									<CardHeader>
										<CardTitle>Create project</CardTitle>
										<CardDescription>Deploy your new project in one-click.</CardDescription>
									</CardHeader>
									<CardContent className='flex items-center justify-between'>
										<Button variant='outline'>type</Button>
										<HoverCard>
											<HoverCardTrigger
												asChild
												className='flex'
											>
												<Button
													variant='link'
													className='justify-end'
												>
													二维码
												</Button>
											</HoverCardTrigger>
											<HoverCardContent>
												<QRCodeCanvas value={`2222`} />
											</HoverCardContent>
										</HoverCard>
									</CardContent>
								</Card>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</article>
	);
}
