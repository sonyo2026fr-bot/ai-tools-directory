with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# إزالة أي قسم قديم تم إضافته بالخطأ
if '<!-- قسم الأخبار الذكية -->' in content:
    import re
    content = re.sub(r'<!-- قسم الأخبار الذكية -->.*?</script>', '', content, flags=re.DOTALL)

# تصميم قسم الأخبار الجديد
news_section = '''
<!-- قسم الأخبار الذكية -->
<section id="ai-news-section" style="margin: 20px auto; padding: 15px; max-width: 1200px; color: #fff;">
    <h3 style="margin-bottom: 15px; color: #00ffcc;">آخر أخبار الذكاء الاصطناعي</h3>
    <div id="news-slider" style="display: flex; overflow-x: auto; gap: 15px; padding-bottom: 10px;"></div>
</section>
<script>
fetch('news.json').then(r=>r.json()).then(data=>{
    const slider = document.getElementById('news-slider');
    slider.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.style.cssText = 'min-width: 200px; background: #1a1a1a; border-radius: 8px; overflow: hidden; border: 1px solid #333; flex-shrink: 0;';
        div.innerHTML = `<img src="${item.image}" style="width:100%; height:100px; object-fit:cover;">
                         <div style="padding:10px;"><h4 style="font-size:13px; margin:0; color:#fff;">${item.title}</h4></div>`;
        slider.appendChild(div);
    });
});
</script>
'''

# البحث عن مكان مناسب (مثل قبل إغلاق الوسم body أو بعد الهيدر لضمان ظهوره)
if 'ai-news-section' not in content:
    if '</body>' in content:
        content = content.replace('</body>', news_section + '\n</body>')
    else:
        content += news_section
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("تمت إضافة قسم الأخبار بنجاح إلى ملف index.html!")
