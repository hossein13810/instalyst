from collections import Counter, defaultdict


def find_common_substrings(names_list, char_len):
    substr_to_strings = defaultdict(set)

    for idx, name in enumerate(names_list):
        seen_in_this_string = set()
        for i in range(len(name) - char_len + 1):
            substr = name[i:i + char_len]
            if substr not in seen_in_this_string:
                substr_to_strings[substr].add(idx)
                seen_in_this_string.add(substr)

    substr_counter = Counter()
    for substr, indices in substr_to_strings.items():
        if len(indices) > 1:
            substr_counter[substr] = len(indices)

    return substr_counter.most_common()
