---
id: fimo_2013_number_theory_p7
year: 2013
number: 7
difficulty: medium
topics: ["number theory"]
source: "IMO 2013 Number Theory Problem 7"
---

Let \(\nu\) be an irrational positive number, and let \(m\) be a positive integer. A pair \((a, b)\) of positive integers is called \(\operatorname{good}\) if
\[
a\lceil b \nu\rceil-b\lfloor a \nu\rfloor=m .
\]
A good pair \((a, b)\) is called excellent if neither of the pairs \((a-b, b)\) and \((a, b-a)\) is good. (As usual, by \(\lfloor x\rfloor\) and \(\lceil x\rceil\) we denote the integer numbers such that \(x-1 < \lfloor x\rfloor \leqslant x\) and \(x \leqslant\lceil x\rceil < x+1\).)
Prove that the number of excellent pairs is equal to the sum of the positive divisors of \(m\).

---
For positive integers \(a\) and \(b\), let us denote
\[
f(a, b)=a\lceil b \nu\rceil-b\lfloor a \nu\rfloor .
\]
We will deal with various values of \(m\); thus it is convenient to say that a pair \((a, b)\) is \(m\)-good or m-excellent if the corresponding conditions are satisfied.
To start, let us investigate how the values \(f(a+b, b)\) and \(f(a, b+a)\) are related to \(f(a, b)\). If \(\{a \nu\}+\{b \nu\} < 1\), then we have \(\lfloor(a+b) \nu\rfloor=\lfloor a \nu\rfloor+\lfloor b \nu\rfloor\) and \(\lceil(a+b) \nu\rceil=\lceil a \nu\rceil+\lceil b \nu\rceil-1\), so
\[
f(a+b, b)=(a+b)\lceil b \nu\rceil-b(\lfloor a \nu\rfloor+\lfloor b \nu\rfloor)=f(a, b)+b(\lceil b \nu\rceil-\lfloor b \nu\rfloor)=f(a, b)+b
\]
and
\[
f(a, b+a)=a(\lceil b \nu\rceil+\lceil a \nu\rceil-1)-(b+a)\lfloor a \nu\rfloor=f(a, b)+a(\lceil a \nu\rceil-1-\lfloor a \nu\rfloor)=f(a, b) .
\]
Similarly, if \(\{a \nu\}+\{b \nu\} \geqslant 1\) then one obtains
\[
f(a+b, b)=f(a, b) \quad \text { and } \quad f(a, b+a)=f(a, b)+a .
\]
So, in both cases one of the numbers \(f(a+b, a)\) and \(f(a, b+a)\) is equal to \(f(a, b)\) while the other is greater than \(f(a, b)\) by one of \(a\) and \(b\). Thus, exactly one of the pairs \((a+b, b)\) and \((a, b+a)\) is excellent (for an appropriate value of \(m\) ).
Now let us say that the pairs \((a+b, b)\) and \((a, b+a)\) are the children of the pair \((a, b)\), while this pair is their parent. Next, if a pair \((c, d)\) can be obtained from \((a, b)\) by several passings from a parent to a child, we will say that \((c, d)\) is a descendant of \((a, b)\), while \((a, b)\) is an ancestor of \((c, d)\) (a pair is neither an ancestor nor a descendant of itself). Thus each pair \((a, b)\) has two children, it has a unique parent if \(a \neq b\), and no parents otherwise. Therefore, each pair of distinct positive integers has a unique ancestor of the form \((a, a)\); our aim is now to find how many m-excellent descendants each such pair has.
Notice now that if a pair \((a, b)\) is m-excellent then \(\min \{a, b\} \leqslant m\). Indeed, if \(a=b\) then \(f(a, a)=a=m\), so the statement is valid. Otherwise, the pair \((a, b)\) is a child of some pair \(\left(a^{\prime}, b^{\prime}\right)\). If \(b=b^{\prime}\) and \(a=a^{\prime}+b^{\prime}\), then we should have \(m=f(a, b)=f\left(a^{\prime}, b^{\prime}\right)+b^{\prime}\), so \(b=b^{\prime}=m-f\left(a^{\prime}, b^{\prime}\right) < m\). Similarly, if \(a=a^{\prime}\) and \(b=b^{\prime}+a^{\prime}\) then \(a < m\).
Let us consider the set \(S_{m}\) of all pairs \((a, b)\) such that \(f(a, b) \leqslant m\) and \(\min \{a, b\} \leqslant m\). Then all the ancestors of the elements in \(S_{m}\) are again in \(S_{m}\), and each element in \(S_{m}\) either is of the form \((a, a)\) with \(a \leqslant m\), or has a unique ancestor of this form. From the arguments above we see that all \(m\)-excellent pairs lie in \(S_{m}\).
We claim now that the set \(S_{m}\) is finite. Indeed, assume, for instance, that it contains infinitely many pairs \((c, d)\) with \(d > 2 m\). Such a pair is necessarily a child of \((c, d-c)\), and thus a descendant of some pair \(\left(c, d^{\prime}\right)\) with \(m < d^{\prime} \leqslant 2 m\). Therefore, one of the pairs \((a, b) \in S_{m}\) with \(m < b \leqslant 2 m\) has infinitely many descendants in \(S_{m}\), and all these descendants have the form \((a, b+k a)\) with \(k\) a positive integer. Since \(f(a, b+k a)\) does not decrease as \(k\) grows, it becomes constant for \(k \geqslant k_{0}\), where \(k_{0}\) is some positive integer. This means that \(\{a \nu\}+\{(b+k a) \nu\} < 1\) for all \(k \geqslant k_{0}\). But this yields \(1 > \{(b+k a) \nu\}=\left\{\left(b+k_{0} a\right) \nu\right\}+\left(k-k_{0}\right)\{a \nu\}\) for all \(k > k_{0}\), which is absurd.
Similarly, one can prove that \(S_{m}\) contains finitely many pairs \((c, d)\) with \(c > 2 m\), thus finitely many elements at all.
We are now prepared for proving the following crucial lemma.
Lemma. Consider any pair \((a, b)\) with \(f(a, b) \neq m\). Then the number \(g(a, b)\) of its \(m\)-excellent descendants is equal to the number \(h(a, b)\) of ways to represent the number \(t=m-f(a, b)\) as \(t=k a+\ell b\) with \(k\) and \(\ell\) being some nonnegative integers.
Proof. We proceed by induction on the number \(N\) of descendants of \((a, b)\) in \(S_{m}\). If \(N=0\) then clearly \(g(a, b)=0\). Assume that \(h(a, b) > 0\); without loss of generality, we have \(a \leqslant b\). Then, clearly, \(m-f(a, b) \geqslant a\), so \(f(a, b+a) \leqslant f(a, b)+a \leqslant m\) and \(a \leqslant m\), hence \((a, b+a) \in S_{m}\) which is impossible. Thus in the base case we have \(g(a, b)=h(a, b)=0\), as desired.
Now let \(N > 0\). Assume that \(f(a+b, b)=f(a, b)+b\) and \(f(a, b+a)=f(a, b)\) (the other case is similar). If \(f(a, b)+b \neq m\), then by the induction hypothesis we have
\[
g(a, b)=g(a+b, b)+g(a, b+a)=h(a+b, b)+h(a, b+a) .
\]
Notice that both pairs \((a+b, b)\) and \((a, b+a)\) are descendants of \((a, b)\) and thus each of them has strictly less descendants in \(S_{m}\) than \((a, b)\) does.
Next, each one of the \(h(a+b, b)\) representations of \(m-f(a+b, b)=m-b-f(a, b)\) as the sum \(k^{\prime}(a+b)+\ell^{\prime} b\) provides the representation \(m-f(a, b)=k a+\ell b\) with \(k=k^{\prime} < k^{\prime}+\ell^{\prime}+1=\ell\). Similarly, each one of the \(h(a, b+a)\) representations of \(m-f(a, b+a)=m-f(a, b)\) as the sum \(k^{\prime} a+\ell^{\prime}(b+a)\) provides the representation \(m-f(a, b)=k a+\ell b\) with \(k=k^{\prime}+\ell^{\prime} \geqslant \ell^{\prime}=\ell\). This correspondence is obviously bijective, so
\[
h(a, b)=h(a+b, b)+h(a, b+a)=g(a, b),
\]
as required.
Finally, if \(f(a, b)+b=m\) then \((a+b, b)\) is m-excellent, so \(g(a, b)=1+g(a, b+a)=1+h(a, b+a)\) by the induction hypothesis. On the other hand, the number \(m-f(a, b)=b\) has a representation \(0 \cdot a+1 \cdot b\) and sometimes one more representation as \(k a+0 \cdot b\); this last representation exists simultaneously with the representation \(m-f(a, b+a)=k a+0 \cdot(b+a)\), so \(h(a, b)=1+h(a, b+a)\) as well. Thus in this case the step is also proved.
Now it is easy to finish the solution. There exists a unique \(m\)-excellent pair of the form \((a, a)\), and each other \(m\)-excellent pair \((a, b)\) has a unique ancestor of the form \((x, x)\) with \(x < m\). By the lemma, for every \(x < m\) the number of its \(m\)-excellent descendants is \(h(x, x)\), which is the number of ways to represent \(m-f(x, x)=m-x\) as \(k x+\ell x\) (with nonnegative integer \(k\) and \(\ell\) ). This number is 0 if \(x \backslash m\), and \(m / x\) otherwise. So the total number of excellent pairs is
\[
1+\sum_{x \mid m, x < m} \frac{m}{x}=1+\sum_{d \mid m, d > 1} d=\sum_{d \mid m} d
\]
as required.
