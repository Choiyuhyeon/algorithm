function solution(data) {
    let answer = "";

    // data: [' + - - + - + - ', ' + + + - + - + ', ' + + - + + + - ']
    for (let i = 0; i < data.length; i++) {
        const seg = data[i];   // 현재 문자열
        let bits = "";

        // seg 안에서 + / - 만 뽑아서 1/0으로 변환
        for (let j = 0; j < seg.length; j++) {
            let ch = seg[j];
            if (ch === "+") {
                bits += "1";
            } else if (ch === "-") {
                bits += "0";
            }
            // 공백은 무시
        }

        // 2진수 → 10진수 → ASCII 문자
        const num = parseInt(bits, 2);
        const asciiChar = String.fromCharCode(num);
        answer += asciiChar;
    }

    return answer;
}
// try 1