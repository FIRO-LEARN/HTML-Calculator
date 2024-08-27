// 입력된 문자를 계산기 화면에 추가하는 함수
function appendCharacter(character) {
    // 계산기의 디스플레이 요소를 가져와서
    const display = document.getElementById("display");
    
    // 디스플레이에 입력된 문자를 추가함
    display.value += character;
}

// 입력된 수학 함수를 계산기 화면에 추가하는 함수
function appendFunction(func) {
    // 계산기의 디스플레이 요소를 가져와서
    const display = document.getElementById("display");
    
    // 디스플레이에 수학 함수와 괄호를 추가함
    // 예: sin(, cos( 등
    display.value += func + '(';
}

// 계산기 화면을 완전히 비우는 함수
function clearDisplay() {
    // 계산기의 디스플레이 요소를 가져와서
    const display = document.getElementById("display");
    
    // 디스플레이의 값을 빈 문자열로 설정하여 모든 내용을 지움
    display.value = '';
}

// 계산기 화면에서 마지막으로 입력된 문자를 삭제하는 함수
function deleteCharacter() {
    // 계산기의 디스플레이 요소를 가져와서
    const display = document.getElementById("display");
    
    // 현재 입력된 값에서 마지막 문자 하나를 제거함
    display.value = display.value.slice(0, -1);
    // slice(0, -1)은 문자열의 끝에서 한 글자를 잘라내는 역할을 함
}

// 사용자가 입력한 수식을 계산하여 결과를 표시하는 함수
function calculate() {
    // 계산기의 디스플레이 요소를 가져와서
    const display = document.getElementById("display");
    
    // 계산기 전체를 감싸고 있는 요소를 가져옴 (진동 효과를 적용하기 위해 필요)
    const calculator = document.querySelector(".calculator");

    try {
        // 여기서 new Function을 사용해 수식을 계산함
        // eval() 함수는 보안 취약점이 있어 악성 코드를 실행할 위험이 큼
        // 예를 들어, 사용자가 의도적으로 악성 코드를 입력하면 eval()은 이를 그대로 실행할 수 있음
        // 하지만 new Function()을 사용하면 함수 내에서만 코드가 실행되며, 외부 변수에 접근이 제한됨
        // 이를 통해 코드 실행의 안전성을 높임
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        // 만약 수식을 계산하는 도중 오류가 발생하면 "Error" 메시지를 디스플레이에 표시함
        display.value = 'Error';
    }
}