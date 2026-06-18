const form = document.querySelector("#referral-link-form");
const output = document.querySelector("#referral-link-output");
const tip = document.querySelector("#referral-link-tip");
const copyButton = document.querySelector("#copy-referral-link");

function isValidContact(value) {
  return /^1[3-9]\d{9}$/.test(value) || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function shortHash(text) {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0).toString(36).toUpperCase().slice(0, 6);
}

function buildReferralUrl(referralCode) {
  const url = new URL("./index.html", window.location.href);
  url.searchParams.set("ref", referralCode);
  url.hash = "apply";
  return url.toString();
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const contact = form.elements.contact.value.trim();
  const owner = form.elements.owner.value.trim();
  const school = form.elements.school.value.trim();
  if (!isValidContact(contact)) {
    tip.textContent = "请输入有效手机号或邮箱，联系方式仅用于必要时核对。";
    return;
  }
  if (!owner || !school) {
    tip.textContent = "请填写姓名和所在高校，便于后续人工核对推荐来源。";
    return;
  }
  const code = `IOP-${shortHash(`${owner}|${school}|${contact}`)}`;
  output.value = buildReferralUrl(code);
  tip.textContent = `已生成推荐码 ${code}。请把链接发给候选人，并提醒对方邮件投递时注明该推荐码。`;
});

copyButton?.addEventListener("click", async () => {
  if (!output.value) {
    tip.textContent = "请先填写姓名、高校和联系方式生成专属链接。";
    return;
  }
  await navigator.clipboard.writeText(output.value);
  copyButton.textContent = "已复制";
  setTimeout(() => {
    copyButton.textContent = "复制链接";
  }, 1600);
});
