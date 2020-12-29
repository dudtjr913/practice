/* 
// 할 일 관리 클래스
- 할 일 입력 : 할 일을 추가할 수 있는데, name, tags, status를 입력받는다. -> 이름 중복 확인 -> id 부여 -> 할 일 추가
- 할 일 삭제 : 할 일의 이름을 입력해 삭제할 수 있다.
- 상태 업데이트 : 할 일의 상태를 업데이트 할 수 있으며, todo, doing, done의 3단계가 있다. -> 같은 상태로의 업데이트 확인 -> 업데이트
- 태그 추가 : 태그 명을 입력해 태그를 추가할 수 있다. -> 태그 중복 확인 -> 태그 추가
- 태그 삭제 : 태그 명을 입력해 삭제할 수 있다.
- 이름 변경 : 할 일의 이름을 변경할 수 있다. -> 이름 중복 확인 -> 이름 변경

// 할 일 보여주기 클래스
- 상태 보여주기 : all 입력 -> 모든 할 일의 상태 보여주기, 특정한 상태 입력 -> 상태에 맞는 할 일 보여주기
- 모든 할 일의 상태 보여주기 : all이 입력되었을 때, 모든 할 일 상태를 보여준다.
- 상태에 맞는 할 일 보여주기 : 특정한 상태가 입력되었을 때, 입력된 상태에 맞는 할 일을 모두 보여준다.

// 변수 설정
todosList = [];
*/

/* pseudo 코드
// 할 일 입력
f 할 일 입력 addTodo(todoName, tags, status){
  // 이름 중복 검사를 마친 후 이상이 없으면 id 부여, 이상이 있으면 error
  // id와 받은 매개변수를 바탕으로 todo obj 생성

  if(이름 중복 검사 메소드(todoName)){
    return alert('이름이 중복됩니다.');
  }
  const todoId = id 생성 메소드 호출;
  const 추가할 todo = {
      name : todoName,
      tags,
      status,
      id : todoId,
  }

  return todosList에 추가할 todo를 push
}
*/

const todosList = [
  {
    'name': '자바스크립트 공부하기',
    'tags': ['programming', 'javascript'],
    'status': 'todo',
    'id': 12123123,
  },
  {
    'name': ' 그림 그리기',
    'tags': ['picture', 'favorite'],
    'status': 'doing',
    'id': 312323,
  },
];

const addTodo = (todoName, tags, status) => {
  if (isNameExist(todoName)) {
    return alert('이름이 중복됩니다.');
  }
  if (!Array.isArray(tags) || !['todo', 'doing', 'done'].includes(status)) {
    return alert(
      'tags는 배열로, status는 todo, doing, done중에서 입력해주세요.',
    );
  }
  const todoId = generateId();
  const todoObj = {
    name: todoName,
    tags,
    status,
    id: todoId,
  };
  todosList.push(todoObj);

  return todoObj;
};

const isNameExist = (todoName) => {
  const exName = todosList.find((key) => key.name.trim() === todoName.trim());
  if (exName) {
    return true;
  }

  return false;
};

const generateId = () => {
  const todoId = Math.floor(Math.random() * 999999);
  const exId = todosList.find((key) => key.id === todoId);
  if (exId) {
    return generateId();
  }

  return todoId;
};

/*
// 할 일 삭제
f 할 일 삭제 removeTodo(todoName){
    // todosList에서 매개변수와 같은 이름을 찾는다
    // 없으면 error, 존재하면 삭제

   const 인덱스 찾기 = findIndex를 통해 삭제할 할 일 찾기
    if(인덱스가 없으면){
       return error('존재하지 않는 이름입니다.');
   }
   
   todosList에서 splice로 삭제
}
*/

const removeTodo = (todoName) => {
  const exNameIndex = todosList.findIndex(
    (key) => key.name.trim() === todoName.trim(),
  );
  if (exNameIndex === -1) {
    return alert('존재하지 않는 이름입니다.');
  }

  return todosList.splice(exNameIndex, 1);
};

/*
// 상태 업데이트
f 상태 업데이트 todoStatusUpdate(todoName, status){
    // find 메소드를 통해 상태를 변경할 todo를 찾는다
    // 없으면 error, 존재하면 status를 입력된 status로변경
    // status가 기존 것과 같거나 todo, doing, done 중에 입력되지 않았으면 에러

    const 변경할 할 일 찾기 = find를 통해 변경할 할 일 찾기
    if(변경할 할 일이 없으면){
        return error('존재하지 않는 이름입니다.')
    }
    if(status가 변경할 할 일의 status와 같거나 || todo, doing, done 중에 입력되지 않았다면){
        return error('상태가 기존과 동일하거나 todo, doing, done 중에 입력되지 않았습니다.')
    }
    
    변경할 할 일.status = status
}
*/
const todoStatusUpdate = (todoName, status) => {
  const exTodo = todosList.find((key) => key.name.trim() === todoName.trim());
  if (!exTodo) {
    return alert('존재하지 않는 이름입니다.');
  }
  if (exTodo.status === status || !['todo', 'doing', 'done'].includes(status)) {
    return alert(
      '상태가 기존과 동일하거나 todo, doing, done 중에 입력되지 않았습니다.',
    );
  }

  return (exTodo.status = status);
};

/*
// 태그 추가
f 태그 추가 addTags(todoName, tagName){
  // find 메소드를 통해 태그를 추가할 todo를 찾는다
  // 없으면 error, 존재하면 tag를 추가
  // tagName이 string이라면 push, array라면 배열을 돌면서 push

    const 변경할 할 일 찾기 = find를 통해 변경할 할 일 찾기
    if(변경할 할 일이 없으면){
      return error('존재하지 않는 이름입니다.')
    }
    if(typeof tagName === string){
        return 변경할 할 일.tags.push(tagName)
    } else if(Array.isArray(tagName)){
        return tagName.forEach((name) => 변경할 할 일.tags.push(name))
    }
}

// 태그 삭제
f 태그 삭제 removeTags(todoName, tagName){
  // find 메소드를 통해 태그를 삭제할 todo를 찾는다
  // 없으면 error, 존재하면 tags에 tagName이 존재하는지 확인
  // tagName이 존재하지 않으면 error, 존재하면 삭제

    const 변경할 할 일 찾기 = find를 통해 변경할 할 일 찾기
      if(변경할 할 일이 없으면){
      return error('존재하지 않는 이름입니다.')
    }
    const 변경할 태그 index찾기 = findIndex를 통해 변경할 태그 찾기
    if(변경할 태그가 없으면){
        return error('존재하지 않는 태그입니다.')
    }

    return 할 일.tags.splice를 사용해 태그 삭제
}

// 이름 변경
f 이름 변경 changeTodoName(todoName, changeName){
  // 이름 중복 검사에 이상이 있으면 error, 없으면 넘어간다
  // find 메소드를 통해 이름을 변경할 todo를 찾는다
  // 없으면 error, 있으면 이름 변경

    if(이름 중복 검사 메소드(changeName)){
      return alert('이름이 중복됩니다.');
    }
    const 변경할 할 일 찾기 = find를 통해 변경할 할 일 찾기
        if(변경할 할 일이 없으면){
      return error('존재하지 않는 이름입니다.')
    }
    
    return 할 일.name = changeName
}

// 할 일 보여주기 클래스
// 상태 보여주기
f 상태 보여주기 show(status){
  // 매개변수로 받은 status에 맞는 리스트를 보여준다
  // all이 입력된다면 모든 리스트의 총 합을 보여준다

  if(status === 'all'){
    return 모든 상태의 할 일 보여주기 메소드 호출
  }
  return 상태에 맞는 할 일 보여주기 메소드 호출(status)
}

// 모든 상태의 할 일 보여주기
f 모든 상태의 할 일 보여주기 showAll(){
  // 모든 할 일의 상태의 합을 보여준다.
  // 현재상태 : todo:1개, doing:2개, done:4개와 같은 형태로 보여준다.

  const 상태 object = {};
  this.todosList.forEach((key) => {
    if(status가 상태 object에 존재하면 status +1){
     return 상태 object.status =+ 1
    } 
    존재하지 않으면 추가
    return 상태 object.status = 1
  })
  
  상태 object를 보여주기 위한 형태로 변경
  Object.entries를 사용해 array로 변경 후 return
}

// 상태에 맞는 할 일 보여주기
f 상태에 맞는 할 일 보여주기 showSelectedStatus(status){
  // 매개변수 status에 맞는 할 일 목록을 보여준다.
  // status가 todo일 때, todo리스트 : 총2건 : '자바스크립트 공부하기', 'ios공부하기'와 같은 형태로 보여준다.

  const 상태에 맞는 할 일 목록 : 이름 = this.todosList.map으로 할당
  
  상태에 맞는 할 일 목록에서 총 길이와 join메소드를 사용해 보여주기 return
}
*/
