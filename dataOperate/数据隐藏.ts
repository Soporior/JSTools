function maskMiddleCharacters(inputString: string, width: number) {
	if (typeof inputString != 'string' || inputString.length <= width) {
		return inputString; // 如果字符串长度小于等于指定宽度，则不进行替换
	}

	const start = Math.floor((inputString.length - width) / 2);
	const end = start + width;

	const maskedString = inputString
		.split('')
		.map((char, index) => {
			return index >= start && index < end ? '*' : char;
		})
		.join('');

	return maskedString;
}

