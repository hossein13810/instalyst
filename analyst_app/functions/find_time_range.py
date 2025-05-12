def find_time_range(times_data_dict, time_float):
    for time_range in times_data_dict.keys():
        start_str, end_str = time_range.split('-')
        start = int(start_str)
        end = int(end_str) if end_str != '00' else 24

        if start < end:
            if start <= time_float < end:
                return time_range
        else:
            if time_float >= start or time_float < end:
                return time_range
    return None
