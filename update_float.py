import glob

for filepath in glob.glob('**/*.html', recursive=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # تعديل حجم الأيقونة العائمة وتوسيع مساحتها لتصبح كبيرة وبارزة
    if 'position: fixed' in content or 'z-index' in content or 'fa-comment' in content:
        # البحث عن أسلوب الزر العائم وتحديثه ليصبح أكبر حجماً
        old_style = '''width: 50px; height: 50px;'''
        new_style = '''width: 64px; height: 64px; font-size: 1.5rem; box-shadow: 0 6px 20px rgba(99,102,241,0.6);'''
        content = content.replace(old_style, new_style)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print("Done updating floating button size.")
