import jsonp from '@/assets/js/jsonp'

export function getHotKey(){
	const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
	const data = {
		uin: 0,
		format: 'jsonp',
		inCharset: 'utf-8',
		outCharset: 'utf-8',
		notice: 0,
		platform: 'h5',
		needNewCode: 1,
	}
	return jsonp(url,data,{param:'jsonpCallback'})
}

export function getSuggestion(value,page){
	const url = `https://c.y.qq.com/soso/fcgi-bin/client_search_cp?aggr=1&cr=1&flag_qc=0&p=1&n=30&w=${value}`
	const data = {
		uin: 0,
		format: 'jsonp',
		inCharset: 'utf-8',
		outCharset: 'utf-8',
		notice: 0,
		platform: 'h5',
		needNewCode: 1,
		w: value,
		zhidaqu: 1,
		catZhida: 1,
		t: 0,
		flag: 1,
		ie: 'utf-8',
		sem: 1,
		aggr: 0,
		perpage: 20,
		n: 20,
		p: page,
		remoteplace: 'txt.mqq.all',
	}
	return jsonp(url,data,{param:'jsonpCallback'})
}