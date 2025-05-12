from django.db import models


class TargetsData(models.Model):
    instagram_id = models.CharField(max_length=10000, blank=True, null=True)
    username = models.CharField(max_length=10000, blank=True, null=True)
    full_name = models.CharField(max_length=10000, blank=True, null=True)
    biography = models.TextField(blank=True, null=True)
    is_verified = models.CharField(max_length=10000, blank=True, null=True)
    is_private = models.CharField(max_length=10000, blank=True, null=True)
    is_new_to_instagram = models.CharField(max_length=10000, blank=True, null=True)
    is_profile_picture_expansion_enabled = models.CharField(max_length=10000, blank=True, null=True)
    has_highlight_reels = models.CharField(max_length=10000, blank=True, null=True)
    has_music_on_profile = models.CharField(max_length=10000, blank=True, null=True)
    fan_club_info = models.TextField(blank=True, null=True)
    follower_count = models.CharField(max_length=10000, blank=True, null=True)
    following_count = models.CharField(max_length=10000, blank=True, null=True)
    media_count = models.CharField(max_length=10000, blank=True, null=True)
    is_business = models.CharField(max_length=10000, blank=True, null=True)
    category = models.CharField(max_length=10000, blank=True, null=True)
    hd_profile_pic_url = models.TextField(blank=True, null=True)
    profile_pic_id = models.CharField(max_length=10000, blank=True, null=True)
    profile_image = models.FileField(blank=True, null=True, upload_to="profile_images")

    def __str__(self):
        return self.username


class TargetBioLinks(models.Model):
    bio_title = models.CharField(max_length=10000, blank=True, null=True)
    bio_url = models.TextField(blank=True, null=True)
    target_db_data = models.ForeignKey(TargetsData, on_delete=models.CASCADE)


class TargetAccountHashtags(models.Model):
    hashtag_name = models.CharField(max_length=10000, blank=True, null=True)
    hashtag_id = models.CharField(max_length=10000, blank=True, null=True)
    target_db_data = models.ForeignKey(TargetsData, on_delete=models.CASCADE)


class TargetFollowersData(models.Model):
    instagram_id = models.CharField(max_length=10000, blank=True, null=True)
    username = models.CharField(max_length=10000, blank=True, null=True)
    full_name = models.CharField(max_length=10000, blank=True, null=True)
    is_private = models.CharField(max_length=10000, blank=True, null=True)
    is_verified = models.CharField(max_length=10000, blank=True, null=True)
    profile_pic_url = models.TextField(blank=True, null=True)
    profile_image = models.FileField(blank=True, null=True, upload_to="profile_images")
    target_db_data = models.ForeignKey(TargetsData, on_delete=models.CASCADE)

    def __str__(self):
        return self.username


class TargetFollowingsData(models.Model):
    instagram_id = models.CharField(max_length=10000, blank=True, null=True)
    username = models.CharField(max_length=10000, blank=True, null=True)
    full_name = models.CharField(max_length=10000, blank=True, null=True)
    is_private = models.CharField(max_length=10000, blank=True, null=True)
    is_verified = models.CharField(max_length=10000, blank=True, null=True)
    profile_pic_url = models.TextField(blank=True, null=True)
    profile_image = models.FileField(blank=True, null=True, upload_to="profile_images")
    target_db_data = models.ForeignKey(TargetsData, on_delete=models.CASCADE)

    def __str__(self):
        return self.username


class TargetPostsData(models.Model):
    taken_at = models.DateTimeField(blank=True, null=True)
    post_pk = models.CharField(max_length=10000, blank=True, null=True)
    post_id = models.CharField(max_length=10000, blank=True, null=True)
    caption_is_edited = models.CharField(max_length=10000, blank=True, null=True)
    share_count_disabled = models.CharField(max_length=10000, blank=True, null=True)
    like_and_view_counts_disabled = models.CharField(max_length=10000, blank=True, null=True)
    is_quiet_post = models.CharField(max_length=10000, blank=True, null=True)
    has_privately_liked = models.CharField(max_length=10000, blank=True, null=True)
    code = models.CharField(max_length=10000, blank=True, null=True)
    caption = models.TextField(blank=True, null=True)
    can_reply = models.CharField(max_length=10000, blank=True, null=True)
    comment_count = models.CharField(max_length=10000, blank=True, null=True)
    like_count = models.CharField(max_length=10000, blank=True, null=True)
    can_viewer_save = models.CharField(max_length=10000, blank=True, null=True)
    can_viewer_reshare = models.CharField(max_length=10000, blank=True, null=True)
    cover_image = models.FileField(blank=True, null=True, upload_to="posts_cover_images")
    target_db_data = models.ForeignKey(TargetsData, on_delete=models.CASCADE)

    def __str__(self):
        return self.code


class TargetPostsContentsData(models.Model):
    content_file = models.FileField(blank=True, null=True, upload_to="posts_contents")
    post_db_data = models.ForeignKey(TargetPostsData, on_delete=models.CASCADE)


class TargetPostLikesData(models.Model):
    instagram_pk = models.CharField(max_length=10000, blank=True, null=True)
    instagram_id = models.CharField(max_length=10000, blank=True, null=True)
    username = models.CharField(max_length=10000, blank=True, null=True)
    full_name = models.CharField(max_length=10000, blank=True, null=True)
    is_private = models.CharField(max_length=10000, blank=True, null=True)
    is_verified = models.CharField(max_length=10000, blank=True, null=True)
    profile_pic_url = models.TextField(blank=True, null=True)
    is_new = models.CharField(max_length=10000, blank=True, null=True)
    profile_image = models.FileField(blank=True, null=True, upload_to="profile_images")
    post_db_data = models.ForeignKey(TargetPostsData, on_delete=models.CASCADE)


class TargetPostCommentsData(models.Model):
    instagram_pk = models.CharField(max_length=10000, blank=True, null=True)
    instagram_id = models.CharField(max_length=10000, blank=True, null=True)
    username = models.CharField(max_length=10000, blank=True, null=True)
    full_name = models.CharField(max_length=10000, blank=True, null=True)
    is_private = models.CharField(max_length=10000, blank=True, null=True)
    is_verified = models.CharField(max_length=10000, blank=True, null=True)
    did_report_as_spam = models.CharField(max_length=10000, blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)
    share_enabled = models.CharField(max_length=10000, blank=True, null=True)
    text = models.TextField(blank=True, null=True)
    comment_like_count = models.CharField(max_length=10000, blank=True, null=True)
    profile_pic_url = models.TextField(blank=True, null=True)
    profile_image = models.FileField(blank=True, null=True, upload_to="profile_images")
    post_db_data = models.ForeignKey(TargetPostsData, on_delete=models.CASCADE)

    def __str__(self):
        return self.post_db_data.code


class TargetStoriesData(models.Model):
    instagram_pk = models.CharField(max_length=10000, blank=True, null=True)
    instagram_id = models.CharField(max_length=10000, blank=True, null=True)
    taken_at = models.DateTimeField(blank=True, null=True)
    expiring_at = models.DateTimeField(blank=True, null=True)
    like_and_view_counts_disabled = models.CharField(max_length=10000, blank=True, null=True)
    is_reel_media = models.CharField(max_length=10000, blank=True, null=True)
    commenting_disabled_for_viewer = models.CharField(max_length=10000, blank=True, null=True)
    can_viewer_save = models.CharField(max_length=10000, blank=True, null=True)
    code = models.CharField(max_length=10000, blank=True, null=True)
    can_reply = models.CharField(max_length=10000, blank=True, null=True)
    can_reshare = models.CharField(max_length=10000, blank=True, null=True)
    caption = models.TextField(blank=True, null=True)
    cover_image = models.FileField(blank=True, null=True, upload_to="stories_cover_images")
    video_file = models.FileField(blank=True, null=True, upload_to="stories_contents")
    target_db_data = models.ForeignKey(TargetsData, on_delete=models.CASCADE)


class TargetHighlightsData(models.Model):
    instagram_id = models.CharField(max_length=10000, blank=True, null=True)
    title = models.CharField(max_length=10000, blank=True, null=True)
    cover_image = models.FileField(blank=True, null=True, upload_to="highlights_cover_images")
    target_db_data = models.ForeignKey(TargetsData, on_delete=models.CASCADE)


class TargetHighlightDetailsData(models.Model):
    instagram_pk = models.CharField(max_length=10000, blank=True, null=True)
    instagram_id = models.CharField(max_length=10000, blank=True, null=True)
    taken_at = models.DateTimeField(blank=True, null=True)
    like_and_view_counts_disabled = models.CharField(max_length=10000, blank=True, null=True)
    is_reel_media = models.CharField(max_length=10000, blank=True, null=True)
    commenting_disabled_for_viewer = models.CharField(max_length=10000, blank=True, null=True)
    can_viewer_save = models.CharField(max_length=10000, blank=True, null=True)
    code = models.CharField(max_length=10000, blank=True, null=True)
    can_reply = models.CharField(max_length=10000, blank=True, null=True)
    can_reshare = models.CharField(max_length=10000, blank=True, null=True)
    caption = models.TextField(blank=True, null=True)
    cover_image = models.FileField(blank=True, null=True, upload_to="stories_cover_images")
    video_file = models.FileField(blank=True, null=True, upload_to="stories_contents")
    highlight_db_data = models.ForeignKey(TargetHighlightsData, on_delete=models.CASCADE)
