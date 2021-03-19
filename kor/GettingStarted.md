# VRChat API 문서

!> **아주 아주 중요함!** 이 API를 사용하는 것은 악의적이지 않은 의도에 한해서 허용됩니다. API를 남용하는 것은 당신의 계정이 정지되도록 만들 수 있습니다!

?> 이 문서는 SDK 버전 `2018.05.04.09.53` 용이고, 빌드 태그는 `build-18-05-18-noah-salmon` 입니다.

# 문서 정보
**Outdated**으로 표시된 문서 섹션은, 단락 또는 엔드 포인트가 더 이상 현재 API 버전에서 지원되지 않거나 엔드 포인트가 여전히 작동하는지 저희가 확인하는 중임을 의미합니다.

**Soon**이라고 표시된 섹션은 진행중인 단락이며 향후 업데이트시 문서에 추가됩니다.

**BETA**로 표시된 섹션은 VRChat의 베타 클라이언트에서 발견되는 API 엔드 포인트이며 기능이 완성되면 변경 될 수 있습니다.

# API 라이브러리

1. ~~VRChatJava (Java) https://github.com/VRChatAPI/VRChatJava~~ 구식

2. VRChat.Net (C#) https://github.com/VRChatAPI/VRChat.Net


# API에 대한 링크

지금은 3가지 선택지가 있습니다.

1. Dev API - https://dev-api.vrchat.cloud/api/1/ (문서화 되지 않음)
2. Release API - https://api.vrchat.cloud/api/1/

이 문서에서 저희는 그냥 릴리즈를 사용하지만, 필요에 따라 당신이 직접 변경할 수 도 있습니다.

# 빠른 개요

VRChat은 HTTP 프로토콜을 사용하여 서버에서 서버로 기본 정보를 가져와 정보를 보냅니다.

## 인증

대부분의 API는 인증을 요구합니다.

인증하는 방법에는 두가지가 있습니다. (기술적으로 보자면 하나입니다.)

1. 인증 헤더를 기본 인증과 함께 보내기
2. 기본 인증으로 API를 호출 한 후 반환 된 `auth` 쿠키를 저장하고 재사용하기

후자를 추천드립니다.

## 클라이언트 API 키

모든 API에는 특별한 API 키가 필요합니다. 간단히 [원격 구성](RemoteConfig.md) 에서 엔드 포인트를 호출하십시오.

API 키는 `apiKey`라는 쿼리 문자열로 전달됩니다. 

?> 마지막으로 알려진 키는 `JlE5Jldo5Jibnk5O5hTx6XVqsJu4WJ26`입니다.
