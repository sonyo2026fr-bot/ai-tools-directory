import os

# البحث عن ملف index.html وإضافة الزر العائم إليه إذا لم يكن موجوداً
if os.path.exists('index.html'):
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    floating_btn_code = '''
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
'''.strip()

    if 'floatingChatBtn' not in content:
        # إضافته قبل نهاية الوسم </body> مباشرة
        if '</body>' in content:
            content = content.replace('</body>', f'\n{floating_btn_code}\n</body>')
        else:
            content += f'\n{floating_btn_code}\n'
            
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Floating button added to index.html successfully.")
    else:
        print("Floating button already exists.")
