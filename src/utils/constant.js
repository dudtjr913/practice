export const dataOne = {
  debug: 'on',
  window: {
    title: 'Sample Konfabulator Widget',
    name: 'main_window',
    width: 500,
    height: 500,
  },
  image: {
    src: 'Images/Sun.png',
    name: 'sun1',
    hOffset: 250,
    vOffset: 250,
    alignment: 'center',
  },
  text: {
    data: 'Click Here',
    size: 36,
    style: 'bold',
    name: 'text1',
    hOffset: 250,
    vOffset: 100,
    alignment: 'center',
    onMouseUp: 'sun1.opacity = (sun1.opacity / 100) * 90;',
  },
};

export const dataTwo = [
  {
    id: 1,
    name: 'Yong',
    phone: '010-0000-0000',
    type: 'sk',
    childnode: [
      {
        id: 11,
        name: 'echo',
        phone: '010-0000-1111',
        type: 'kt',
        childnode: [
          {
            id: 115,
            name: 'hary',
            phone: '211-1111-0000',
            type: 'sk',
            childnode: [
              {
                id: 1159,
                name: 'pobi',
                phone: '010-444-000',
                type: 'kt',
                childnode: [
                  {
                    id: 11592,
                    name: 'cherry',
                    phone: '111-222-0000',
                    type: 'lg',
                    childnode: [],
                  },
                  {
                    id: 11595,
                    name: 'solvin',
                    phone: '010-000-3333',
                    type: 'sk',
                    childnode: [],
                  },
                ],
              },
            ],
          },
          {
            id: 116,
            name: 'kim',
            phone: '444-111-0200',
            type: 'kt',
            childnode: [
              {
                id: 1168,
                name: 'hani',
                phone: '010-222-0000',
                type: 'sk',
                childnode: [
                  {
                    id: 11689,
                    name: 'ho',
                    phone: '010-000-0000',
                    type: 'kt',
                    childnode: [
                      {
                        id: 116890,
                        name: 'wonsuk',
                        phone: '010-000-0000',
                        type: 'kt',
                        childnode: [],
                      },
                      {
                        id: 1168901,
                        name: 'chulsu',
                        phone: '010-0000-0000',
                        type: 'sk',
                        childnode: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 117,
            name: 'hong',
            phone: '010-0000-0000',
            type: 'lg',
            childnode: [],
          },
        ],
      },
    ],
  },
];

export const todoStatus = ['todo', 'doing', 'done'];

export const todoErrorMessage = {
  EXIST_NAME: '중복되는 이름이 존재합니다.',
  WRONG_VALUE: 'tags는 배열로, status는 todo, doing, done중에서 입력해주세요.',
  WRONG_STATUS:
    '상태가 기존과 동일하거나 todo, doing, done 중에 입력되지 않았습니다.',
  WRONG_TAGS: '문자열이나 배열로 입력해주세요.',
  NOT_WORD: '한 개의 단어를 입력해주세요.',
  NOT_HAVING_TAG: '존재하지 않는 태그입니다.',
  WRONG_SHOW_STATUS: 'all, todo, doing, done중에서 입력해주세요.',
  NOT_HAVING_VALUE: '존재하지 않는 값입니다.',
};

export const NAME = 'name';
export const STRING = 'string';
export const ALL = 'all';
