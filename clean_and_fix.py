import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. إزالة أي أزرار شات قديمة (نبحث عن روابط تحتوي على كلمات chat أو comment لا تطابق كودنا الجديد)
# سنقوم بحذف أي <a> تحتوي على أيقونات تعليق ما عدا الزر الذي أضفناه بـ ID
content = re.sub(r'<a[^>]*id="[^"]*float[^"]*"[^>]*>.*?</a>', '', content, flags=re.DOTALL)
content = re.sub(r'<a[^>]*href="[^"]*chat[^"]*"[^>]*>.*?<i class="fas fa-comment[^"]*"></i>.*?</a>', '', content, flags=re.DOTALL)

# 2. التأكد من أن الزر الجديد موجود بوضوح
new_btn = '''
<!-- زر الشات العائم الكبير والمتحرك -->
<a href="chat.html" id="floatingChatBtn" style="position: fixed; bottom: 25px; left: 25px; width: 68px; height: 68px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.8rem; box-shadow: 0 8px 25px rgba(99,102,241,0.6); z-index: 9999; text-decoration: none; animation: floatPulse 2s infinite; transition: transform 0.2s;">
<i class="fas fa-comment-dots"></i>
</a>
<style>
@keyframes floatPulse {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7); }
  70% { transform: scale(1.08); box-shadow: 0 0 0 15px rgba(99, 102, 241, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
}
#floatingChatBtn:active { transform: scale(0.92); }
</style>
'''

if 'id="floatingChatBtn"' not in content:
    content = content.replace('</body>', f'{new_btn}\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
