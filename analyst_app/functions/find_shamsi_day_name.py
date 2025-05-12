import jdatetime


def find_shamsi_day_name(date):
    shamsi_date = jdatetime.date.fromgregorian(date=date)
    weekday_translate = {
        'Saturday': 'شنبه',
        'Sunday': 'یکشنبه',
        'Monday': 'دوشنبه',
        'Tuesday': 'سه‌ شنبه',
        'Wednesday': 'چهارشنبه',
        'Thursday': 'پنجشنبه',
        'Friday': 'جمعه'
    }
    weekday_en = shamsi_date.strftime('%A')
    weekday_fa = weekday_translate[weekday_en]
    return weekday_fa
