
/**
 * 페이지가 로드됐을 경우 로드된 url에 대한 분석을 하고 각 상황에 맞는 처리를 합니다.
 */
window.onload = function () {
    var url = new URL(location.href)
    var category = url.searchParams.get("category")
    if (category != null) whenExistCategory(category)
}

/**
 * url 파라미터에 카테고리 코드가 있을 경우의 로직을 정의합니다.
 * 카테고리 코드에 맞는 카테고리를 선택하는 효과를 부여합니다.
 * @param category 카테고리 코드
 */

function whenExistCategory(category) {
    changedCategory(category)
    switch (category) {
        case "highQuality": // 고가 물품
            document.getElementById("highQuality").checked = true;
            break;
        case "nft": // NFT
            document.getElementById("nft").checked = true;
            break;
        case "byArea": // 지역별
            document.getElementById("byArea").checked = true;
            break;
        default:
            break;
    }
}

function changedCategory(category) {
    switch (category) {
        case "highQuality":
            document.getElementById("categoryTitle").innerHTML="💜고가 물품💜";
            break;
        case "nft":
            document.getElementById("categoryTitle").innerHTML="💜NFT💜";
            break;
        case "byArea":
            document.getElementById("categoryTitle").innerHTML="💜지역별💜";
            break;
        default:
            break;
    }
}

//카테고리 선택 시 밑에 텍스트 바뀌게 구현....ㅠㅠㅠㅠ