# [ 브랜치 구조 ]
> - master
>> - ady(안선임)
>> - kma(곽주임)

# [ 프로젝트 clone 하기 ! ]
```
	1. git 설치 파일 다운로드
		=> https://git-scm.com/download/win
	2. C:\VueStudy 폴더생성
	3. C:\VueStudy 마우스 우클릭 git bash 실행
	4. 프로젝트 클론
		=> git clone https://github.com/ANDUYONG/VueStudy.git
```

# [ pull/push 방법 ]
#### ! 항상 C:\VueStudy 이 경로에서 git bash 키고 git branch (본인계정) 으로 접속
> ```
>	ex) git branch kma
> ```

> #### - &nbsp; update
> ```
>	1. git pull origin master
>		 - 마스터 브랜치로부터 현재의 브랜치로 업데이트(가져오기)
> ```

> #### - &nbsp; commit
> ```
>	1. git add .
>		- 작업 파일을 커밋전 임시 저장소에 추가
>
>	2. git commit -m "년도/월/날짜 이름 커밋 메세지 추가"
>		- 임시 저장소에 추가된 내용을 로컬 브랜치에서 확정
>			ex) git commit -m "2024/02/05 안두용 README.md 깃허브 매뉴얼 추가 또는 수정"
>	3. git push origin (본인계정 브랜치)
>		- 로컬 브랜치에서 확정된 내용을 깃허브 원격 브랜치로 저장
>			ex) git push origin kma
> ```
