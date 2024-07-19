export const PopsMathFloatUtils = {
	/**
	 * 判断数字是否是浮点数
	 * @param num
	 */
	isFloat(num: number): boolean {
		return Number(num) === num && num % 1 !== 0;
	},
	/**
	 * 浮点数加法
	 * @param number1
	 * @param number2
	 */
	add(number1: number, number2: number) {
		let number1length, number2length, powValue;
		try {
			number1length = number1.toString().split(".")[1].length;
		} catch (error) {
			number1length = 0;
		}
		try {
			number2length = number2.toString().split(".")[1].length;
		} catch (error) {
			number2length = 0;
		}
		powValue = Math.pow(10, Math.max(number1length, number2length));
		return Math.round(number1 * powValue + number2 * powValue) / powValue;
	},
	/**
	 * 减法
	 * @param number1
	 * @param number2
	 */
	sub(number1: number, number2: number) {
		let number1length, number2length, powValue;
		try {
			number1length = number1.toString().split(".")[1].length;
		} catch (error) {
			number1length = 0;
		}
		try {
			number2length = number2.toString().split(".")[1].length;
		} catch (error) {
			number2length = 0;
		}
		powValue = Math.pow(10, Math.max(number1length, number2length));
		let fixedValue =
			number1length >= number2length ? number1length : number2length;
		return (
			Math.round(number1 * powValue - number2 * powValue) / powValue
		).toFixed(fixedValue);
	},
	/**
	 * 除法
	 * @param number1
	 * @param number2
	 */
	division(number1: number, number2: number) {
		let number1length, number2length, number1ReplaceValue, number2ReplaceValue;
		try {
			number1length = number1.toString().split(".")[1].length;
		} catch (error) {
			number1length = 0;
		}
		try {
			number2length = number2.toString().split(".")[1].length;
		} catch (error) {
			number2length = 0;
		}
		number1ReplaceValue = Number(number1.toString().replace(".", ""));
		number2ReplaceValue = Number(number2.toString().replace(".", ""));
		return (
			(number1ReplaceValue / number2ReplaceValue) *
			Math.pow(10, number2length - number1length)
		);
	},
};
