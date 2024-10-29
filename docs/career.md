---
outline: deep
---

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useData } from 'vitepress'
import { darkTheme, lightTheme, NConfigProvider, NTimeline, NTimelineItem, NGradientText, NSpace, NGrid, NGi } from 'naive-ui'

const { isDark } = useData()
const theme = ref(isDark.value ? darkTheme: lightTheme);

watch(isDark, async (newQuestion, oldQuestion) => {
    theme.value = isDark.value ? darkTheme: lightTheme;
})
</script>

<n-config-provider :theme="theme">
    <n-grid  item-responsive responsive="screen">
    <n-gi span="24 s:24 m:12 l:12 xl:12 2xl:12">
        <n-space vertical :size="24">
            <n-gradient-text type="info" :size="24">- 경력 & 이력 -</n-gradient-text>
            <n-timeline>
                <n-timeline-item
                    type="success"
                    title="Kakao Entertainment"
                    content="정규직 / 다니는중"
                    time="2021-07-01 ~"
                    line-type="dashed"
                />
                <n-timeline-item
                    type="success"
                    title="Kakao"
                    content="정규직 / 퇴사 (이직)"
                    time="2018-01-01 ~ 2021-06-30"
                />
                <n-timeline-item
                    type="success"
                    title="리얼네트웍스"
                    content="정규직 / 퇴사 (이직)"
                    time="2011-07-01 ~ 2017-12-31"
                />
                <n-timeline-item
                    type="success"
                    title="-"
                    content="프리센서"
                    time="2011-01-01 ~ 2011-06-30"
                />
                <n-timeline-item
                    type="success"
                    title="에프에이솔루션"
                    content="정규직 / 퇴사 (이직)"
                    time="2009-04-01 ~ 2010-12-31"
                />
                <n-timeline-item
                    type="success"
                    title="심포시스"
                    content="프리센서"
                    time="2006-05-01 ~ 2009-03-31"
                />
                <n-timeline-item
                    type="success"
                    title="크림하우스"
                    content="프리센서"
                    time="2006-01-01 ~ 2006-04-30"
                />
                <n-timeline-item
                    type="error"
                    title="이리더"
                    content="정규직 / 퇴사 / 프리센서 전환"
                    time="2002-03-01 ~ 2005-12-31"
                />
                <n-timeline-item
                    type="error"
                    title="이바다콤"
                    content="정규직 / 퇴사 (이직)"
                    time="2000-06-01 ~ 2002-02-28"
                />
                <n-timeline-item
                    type="error"
                    title="NetGain Holdings"
                    content="이리더 / 퇴사 (이직)"
                    time="1999-02-01 ~ 2000-05-31"
                />
            </n-timeline>
        </n-space>
    </n-gi>
    <n-gi span="24 s:24 m:12 l:12 xl:12 2xl:12">
        <n-space vertical :size="24">
            <n-gradient-text type="info" :size="24">- 알바 & 이력 -</n-gradient-text>
            <n-timeline>
                <n-timeline-item
                    type="success"
                    title="Kakao Entertainment"
                    content="정규직 / 다니는중"
                    time="2021-07-01 ~"
                    line-type="dashed"
                />
            </n-timeline>
        </n-space>
    </n-gi>
    </n-grid>
</n-config-provider>
